import { connect } from 'mongoose'
import { calcRewards } from '../delRewards';


const main = async () => {
  try {
    await connect('mongodb://127.0.0.1:27017/cashback_bot')
    console.log('MongoDB connected');
    calcRewards(1000)
  } catch (error) {
    console.error('Error in main:', error)
  }
}

(async () => {
  await main()
})()