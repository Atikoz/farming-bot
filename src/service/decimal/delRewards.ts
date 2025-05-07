import Big from "big.js";
import decimalService from "./decimalService";
import logRefReward from "../../../helpers/logRefReward";
import User from "../../models/User";
import envSchema from "../../models/zodEnvSchemaSchema";
import { sendMessage } from "../../sendMessage";
import Height from "../../models/Height";
import dd from 'dedent'

const env = envSchema.parse(process.env);

const { VALIDATOR_REWARD_ADDR_DECIMAL } = env;

interface RewardDetails {
  reward: number;
  rewardRef: number;
  rewardInCashback?: number;
}

export interface RewardsDelegation {
  [address: string]: RewardDetails;
}

interface ICalcReward {
  rewardsDelegation: RewardsDelegation;
  validatorCommission: number
}

const PARTICIPATION_PERCENT = 0.09; // 9%
const REFERRAL_PERCENT = 0.04;      // 4%
const COMMISION_PERCENT = 0.02;  // 2%

const adminWallet = '0x5ca7c29db9f366bbe9c84880fc1c8c0538fa21bc'

export async function run() {
  console.log('run decimal')
  try {
    const totalValidatorStake = await decimalService.getTotalStakeValidator();

    console.log(`total stake validator: ${totalValidatorStake} DEL`);

    let rewardsDelegation: RewardsDelegation = {}
    let validatorCommission: number = 0

    while (true) {
      try {
        const calculateRewards = await calcRewards(totalValidatorStake)
        rewardsDelegation = calculateRewards.rewardsDelegation;
        validatorCommission = calculateRewards.validatorCommission;
        break
      } catch (error) {
        console.log(error)
      }
      await new Promise((resolve) => setTimeout(resolve, 900000))
    }

    const totalReward = Object.values(rewardsDelegation).reduce((acc, user) => {
      return acc + (user.reward + user.rewardRef)
    }, 0);

    console.log('Buy cashback coin');

    const getRewardAmountInCashback = await decimalService.getRewardAmountInCashback(totalReward);
    const { amount, priceCashback } = getRewardAmountInCashback;

    const sellCoin = await decimalService.sellCoin(amount);

    if (!sellCoin) {
      throw new Error('error sell coins decimal');
    }

    Object.keys(rewardsDelegation).map((wallet) => {
      const { reward, rewardRef } = rewardsDelegation[wallet];

      const bigReward = new Big(reward);
      const bigRewardRef = new Big(rewardRef);
      const bigPriceCashback = new Big(priceCashback);
      const rewardCashbackCoin = bigReward.plus(bigRewardRef).div(bigPriceCashback);

      rewardsDelegation[wallet].rewardInCashback = parseFloat(rewardCashbackCoin.toFixed(8));
    });

    const sendReward = await decimalService.multiSign(rewardsDelegation);
    const { status, hash } = sendReward;

    if (!status) {
      throw new Error('error multisign rewards');
    }

    await Height.updateMany(
      {},
      { $set: { lastHeightDecimal: new Date().toISOString() } },
      { upsert: true }
    );

    let message =
      'Выплата вознаграждения по программе реферального фарминга @BazerFarming_bot\n\n' +
      '<a href="https://explorer.decimalchain.com/transactions/' +
      hash +
      '">🏷Мультисенд Decimal</a>\n';

    for (const key in rewardsDelegation) {
      message +=
        dd`<a href="https://explorer.decimalchain.com/address/${key}">${key.substring(
          0,
          4
        )}...${key.substring(key.length - 4)}</a> ${rewardsDelegation[key].rewardInCashback} CASHBACK`.replace(
          /\n/g,
          ''
        ) + '\n'
    };

    await sendMessage(message);

    const residue = await decimalService.getBalance(VALIDATOR_REWARD_ADDR_DECIMAL);
    const adminShare = residue.del;

    const sendShare = await decimalService.sendCoin(adminWallet, adminShare - 3, 'del');

    if (sendShare) {
      await sendMessage(`Возврат остатка комиссии администратору в размере ${adminShare - 3} DEL`)
    } else {
      throw new Error('error send admin share');
    }
  } catch (error) {
    console.error(`error decimal reward: ${error.message}`)
  }
}

const calcRewards = async (totalValidatorStake: number): Promise<ICalcReward> => {
  try {
    console.log('start')
    const rewardsDelegation: RewardsDelegation = {}

    const balance = await decimalService.getBalance(VALIDATOR_REWARD_ADDR_DECIMAL);
    const totalReward = balance.del;
    const validatorCommission = totalReward * COMMISION_PERCENT;

    let users = await User.find({
      addressDecimal: { $ne: null },
    }).lean()

    for (let user of users) {
      const result = await decimalService.getTotalUserStake(user.addressDecimal);

      if (result.status && result.amount >= 1) {
        user.delegator = true;
        user.delegatedAmount = result.amount;

        rewardsDelegation[user.addressDecimal] = {
          reward: 0,
          rewardRef: 0,
        }
      } else {
        user.delegator = false;
        continue
      }
    }

    users = users.filter(({ delegator }) => delegator === true);

    for (let user of users) {
      const rewardProgram = (user.delegatedAmount / totalValidatorStake) * (totalReward * PARTICIPATION_PERCENT);
      const rewardReferral = (user.delegatedAmount / totalValidatorStake) * (totalReward * REFERRAL_PERCENT);

      rewardsDelegation[user.addressDecimal] = {
        reward: rewardProgram,
        rewardRef: 0
      };

      console.log(user)

      const referrer = await User.findById(user.referrer);
      const referrer2 = await User.findById(user.referrer2);
      const referrer3 = await User.findById(user.referrer3);

      if (referrer && referrer.addressDecimal in rewardsDelegation && referrer._id !== user._id) {
        rewardsDelegation[referrer.addressDecimal].rewardRef += rewardReferral;
      }

      if (referrer2 && referrer2.addressDecimal in rewardsDelegation && referrer2._id !== user._id) {
        rewardsDelegation[referrer2.addressDecimal].rewardRef += rewardReferral;
      }

      if (referrer3 && referrer3.addressDecimal in rewardsDelegation && referrer3._id !== user._id) {
        rewardsDelegation[referrer3.addressDecimal].rewardRef += rewardReferral;
      }
    }

    await logRefReward(rewardsDelegation)

    return {
      rewardsDelegation,
      validatorCommission
    }
  } catch (error) {
    console.error(error)
  }
}