import DelegateTransactions from "../../src/models/DelegateTransactions.js";
import { getUserTx } from "../../function/crossfi/getUserTx.js"
import { sendMessage } from "../../src/sendMessage.js";
import User from "../../src/models/User.js";

const checkDelegationsUserTx = async (address) => {
  try {
    console.log('start check crossfi delegation tx');

    const transactions = await getUserTx(address);
    const delegateTransactions = transactions.filter((tx) =>
      tx.logs.some((log) =>
        log.events.some((event) =>
          event.type === 'delegate' &&
          event.attributes.some(attr => attr.key === 'validator' && attr.value === process.env.VALIDATOR_ADDR_CROSSFI)
        )
      )
    )

    if (!delegateTransactions.length) return

    for (const tx of delegateTransactions) {
      const checkTxInDb = await DelegateTransactions.findOne({ hash: tx.txhash });

      if (checkTxInDb) return

      let newSharesValue;

      tx.logs.forEach(log => {
        log.events.forEach(event => {
          if (event.type === "delegate") {
            event.attributes.forEach(attr => {
              if (attr.key === "new_shares") {
                newSharesValue = +attr.value;
              }
            });
          }
        });
      });

      const amount = (BigInt(newSharesValue) / 10n**18n).toString();

      console.log('tx hash:', tx.txhash);
      console.log(`amount: ${amount} MPX`);

      await DelegateTransactions.create({
        hash: tx.txhash,
        coin: 'mpx',
        amount: +amount
      });

      // const user = await User.findOne({ addressCrossFi: address });
      // const userId = user._id;

      sendMessage(`Пользователь ${668169689} с адрессом ${address} делигировал ${amount} MPX`)
      sendMessage(`Вы успешно делегировали ${amount} MPX`, 668169689)
    }
  } catch (error) {
    console.error('check Delegations User Tx crossfi error: ', error.message)
  }
}

export default checkDelegationsUserTx;