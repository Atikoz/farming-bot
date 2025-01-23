import decimalService from "../../function/decimal/decimalService"
import { run } from "../delRewards";
import User from "../models/User"
import { connect } from 'mongoose'

const validatorRewardAddress = '0xe2c8943357fc8f4dbf52a869af3b1da4b1c3097d'

interface RewardDetails {
  reward: number;
  commision: number;
  rewardCashback: number;
  rewardRef: number;
}

interface RewardsDelegation {
  [address: string]: RewardDetails;
}

const PARTICIPATION_PERCENT = 0.09; // 9%
const REFERRAL_PERCENT = 0.04;      // 4%
const COMMISION_PERCENT = 0.02;  // 2%


// const testDelegator = async () => {
//   try {
//     console.log('start')

//     const rewardsDelegation: RewardsDelegation = {}

//     const totalValidatorStake = await decimalService.getTotalStakeValidator(VALIDATOR_ADDR_DECIMAL);
//     const totalReward = await decimalService.getBalance(validatorRewardAddress);

//     let users = await User.find({
//       addressDecimal: { $ne: null },
//     }).lean()

//     for (let user of users) {
//       const result = await decimalService.checkDelegator(user.addressDecimal);

//       if (result.status) {
//         user.delegator = true;
//         user.delegatedAmount = +result.amount;
//         console.log(user.addressDecimal, "-", result.amount)

//         rewardsDelegation[user.addressDecimal] = {
//           reward: 0,
//           commision: 0,
//           rewardCashback: 0,
//           rewardRef: 0,
//         }
//       } else {
//         user.delegator = false;
//         continue
//       }
//     }

//     users = users.filter(({ delegator }) => delegator === true);


//     for (let user of users) {
//       const rewardProgram = (user.delegatedAmount / totalValidatorStake) * (totalReward * 0.09);
//       const rewardReferral = (user.delegatedAmount / totalValidatorStake) * (totalReward * 0.04);
//       const validatorCommission = totalReward * 0.02;

//       rewardsDelegation[user.addressDecimal] = {
//         reward: rewardProgram,
//         commision: validatorCommission,
//         rewardCashback: rewardReferral * CASHBACK_PERCENT_DECIMAL, // Якщо є cashback
//         rewardRef: rewardReferral, // Пропорційно для кожного реферала
//       };
  
//       // Для рефералів
//       const referrer = await User.findById(user.referrer);
//       const referrer2 = await User.findById(user.referrer2);
//       const referrer3 = await User.findById(user.referrer3);
  
//       if (referrer) {
//         rewardsDelegation[referrer.addressDecimal].rewardRef += rewardReferral;
//       }
//       if (referrer2) {
//         rewardsDelegation[referrer2.addressDecimal].rewardRef += rewardReferral;
//       }
//       if (referrer3) {
//         rewardsDelegation[referrer3.addressDecimal].rewardRef += rewardReferral;
//       }

//     }
//     console.log(users)

//   } catch (error) {
//     console.error(error)
//   }
// }

const main = async () => {
  try {
    await connect('mongodb://127.0.0.1:27017/cashback_bot')
    console.log('MongoDB connected');

    await run()

    // await testDelegator()
  } catch (error) {
    console.error('Error in main:', error)
  }
}

(async () => {
  await main()
})()