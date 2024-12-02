import 'dotenv/config'
import { CronJob } from 'cron'
import { connect } from 'mongoose'
import './bot.js'
import { sendMessage } from './sendMessage.js'
import { addMessage, crossFiMessage, decimalMessage } from './startBotMesage.js'

await connect(process.env.DB_URL)
import { run as runDecimal } from './delRewards.js'
import { run as runCrossFI } from './crossfiReward.js'
import backupDB from './backupDatabase.js'
import checkDelegationsUserTx from '../function/crossfi/checkDelegationsCrossfi.js'
import User from './models/User.js'
import updateMsg from './test/update.js'

const job = new CronJob(
  '5 0 * * *',
  async () => {
    console.log('111')
    // await Promise.all([runDecimal(), runCrossFI()])
    await runCrossFI();
    await sendMessage(decimalMessage)
    await sendMessage(crossFiMessage)
    await sendMessage(addMessage)
  },
  null,
  true,
  'Europe/Kiev'
)

const checkDelegationsUser = new CronJob(
  '* * * * *',
  async () => {
    try {
      const users = await User.find();

      for (const user of users) {
        if (user.addressCrossFi) await checkDelegationsUserTx(user.addressCrossFi)
      }
    } catch (error) {
      console.error(error.message);
    }
  },
  null,
  true,
  'UTC'
);

const backupDataBase = new CronJob(
  '0 0 * * *',
  () => {
    try {
      console.log('Запуск ежедневного бэкапа');
      backupDB(process.env.DB_URL);
    } catch (error) {
      console.error(error.message);
    }
  },
  null,
  true,
  'UTC'
);


job.start();
backupDataBase.start();
checkDelegationsUser.start();

console.log(job.nextDate())
runCrossFI();
updateMsg();
