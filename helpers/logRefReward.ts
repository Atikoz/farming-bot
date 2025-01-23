import decimalService from "../function/decimal/decimalService";
import { RewardsDelegation } from "../src/delRewards";
import User from "../src/models/User";
import { sendMessage } from "../src/sendMessage";

async function logRefReward(rewardsDelegation: RewardsDelegation): Promise<void> {
  for (const wallet in rewardsDelegation) {
    if (rewardsDelegation[wallet].rewardRef) {
      const cashbackRate = await decimalService.getCashbackRate()
      const amount = rewardsDelegation[wallet].rewardRef / cashbackRate;
      const user = await User.findOne({ addressDecimal: wallet })

      await sendMessage(`Пользователю ${wallet} начисленно реферальное вознаграждение, в размере ${amount.toFixed(4)} CASHBACK`);
      await sendMessage(`Вам начисленно реферальное вознаграждение, в размере ${amount.toFixed(4)} CASHBACK`, user._id);
    }
  }
}

export default logRefReward