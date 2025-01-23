import decimalService from "../function/decimal/decimalService";
import { RewardsDelegation } from "../src/delRewards";

async function logRefReward(rewardsDelegation: RewardsDelegation): Promise<void> {
  for (const wallet in rewardsDelegation) {
    if (rewardsDelegation[wallet].rewardRef) {
      const cashbackRate = await decimalService.getCashbackRate()
      const amount = rewardsDelegation[wallet].rewardRef / cashbackRate;

      console.log(`Пользователю ${wallet} начисленно реферальное вознаграждение, в размере ${amount.toFixed(4)} CASHBACK`)
    }
  }
}

export default logRefReward