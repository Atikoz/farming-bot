import DelegateTransactions from "../../src/models/DelegateTransactions.js";
import { sendMessage } from "../../src/sendMessage.js";
import User from "../../src/models/User.js";
import getUserTx from "./getUserTx.js";
import sleep from "../../helpers/sleep.js";

const checkDelegationsUserTx = async (address) => {
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

      let newSharesValue;

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
      const userId = user._id;

      sendMessage(`Пользователь ${userId} с адрессом ${address} делигировал ${amount} MPX`)
      sendMessage(`Вы успешно делегировали ${amount} MPX`, userId)
    }
  } catch (error) {
    console.error('check Delegations User Tx crossfi error: ', error.message)
  }
}

export default checkDelegationsUserTx;