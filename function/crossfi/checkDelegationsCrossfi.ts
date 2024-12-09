import DelegateTransactions from "../../src/models/DelegateTransactions";
import { sendMessage } from "../../src/sendMessage";
import User from "../../src/models/User";
import sleep from "../../helpers/sleep";
import getUserTx from "./getUserTx";

const checkDelegationsUserTx = async (address: string) => {
  try {
    await sleep(5000);
    const transactions = await getUserTx(address);
    const delegateTransactions = transactions.filter((tx) =>
      tx.events.some((event) =>
        event.type === 'delegate' &&
        event.attributes.some(attr => attr.key === 'validator' && attr.value === process.env.VALIDATOR_ADDR_CROSSFI)
      )
    )

    console.log('delegateTransactions', delegateTransactions.length);

    if (!delegateTransactions.length) return

    for (const tx of delegateTransactions) {
      const checkTxInDb = await DelegateTransactions.findOne({ hash: tx.hash });

      if (checkTxInDb) return

      let newSharesValue: number = 0;

      tx.events.forEach(event => {
        if (event.type === "delegate") {
          event.attributes.forEach(attr => {
            if (attr.key === "new_shares") {
              newSharesValue = +attr.value;
            }
          });
        }
      });

      const amount = (BigInt(newSharesValue) / 10n ** 18n).toString();

      console.log('tx hash:', tx.hash);
      console.log(`amount: ${amount} MPX`);

      await DelegateTransactions.create({
        hash: tx.hash,
        coin: 'mpx',
        amount: +amount
      });

      const user = await User.findOne({ addressCrossFi: address });

      if (!user) return console.log(`user ${address} not find`)

      const userId = user._id;

      await sendMessage(`Пользователь ${userId} с адрессом ${address} делигировал ${amount} MPX`)
      await sendMessage(`Вы успешно делегировали ${amount} MPX`, userId)
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('check Delegations User Tx crossfi error: ', error.message);
    } else {
      console.error('Unexpected check Delegations User Tx crossfi error:', error);
    }
  }
}

export default checkDelegationsUserTx;