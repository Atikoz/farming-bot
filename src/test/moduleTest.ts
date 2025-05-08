import 'dotenv/config'
import { connect } from 'mongoose'
import AdvertisingCharges from '../service/advertisingСharges';


const main = async () => {
  try {
    await connect('mongodb://127.0.0.1:27017/cashback_bot')
    console.log('MongoDB connected');

    await AdvertisingCharges.dispatchCrossFi()

  } catch (error) {
    console.error('Error in main:', error)
  }
}

(async () => {
  await main()
})()
