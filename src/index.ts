import 'dotenv/config'
import { CronJob } from 'cron'
import { connect } from 'mongoose'
import './bot'
import { sendMessage } from './sendMessage'
import { addMessage, crossFiMessage, decimalMessage } from './startBotMesage'
import { run as runDecimal } from './service/decimal/delRewards'
import { run as runCrossFI } from './service/crossfi/crossfiReward'
import backupDB from '../function/backupDatabase'
import checkDelegationsUserTx from './service/crossfi/checkDelegationsCrossfi'
import User from './models/User'
import AdvertisingCharges from './service/advertisingСharges'

const dbUrl = process.env.DB_URL;

if (!dbUrl) {
  throw new Error("DB_URL is not defined in the environment variables.");
}

await connect(dbUrl)


const job = new CronJob(
  '5 0 * * *',
  async () => {
    console.log('111')
    await Promise.all([runDecimal(), runCrossFI()])
    await AdvertisingCharges.dispatchCrossFi()
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
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error('Unexpected error:', error);
      }
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
      backupDB(dbUrl);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  },
  null,
  true,
  'UTC'
);


job.start();
backupDataBase.start();
checkDelegationsUser.start();

console.log(job.nextDate());
