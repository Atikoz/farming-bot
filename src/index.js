import 'dotenv/config'
import { CronJob } from 'cron'
import { connect } from 'mongoose'
import './bot.js'
import { sendMessage } from './sendMessage.js'
import { crossFiMessage, decimalMessage } from './startBotMesage.js'

await connect(process.env.DB_URL)
import { run as runDecimal } from './delRewards.js'
import { run as runCrossFI } from './crossfiReward.js'
const job = new CronJob(
  '5 0 * * *',
  async () => {
    console.log('111')
    await Promise.all([runDecimal(), runCrossFI()])
    await sendMessage(decimalMessage)
    await sendMessage(crossFiMessage)
  },
  null,
  true,
  'UTC'
)

job.start()

console.log(job.nextDate())
runDecimal()