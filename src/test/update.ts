import { connect } from "mongoose"
import User from "../models/User"
import updateWallet from "../../function/updateDecimalWallet";

const updateDecimalWallet = async () => {
  try {
    const users = await User.find({
      addressDecimal: { $ne: null },
    }).lean()

    for (const user of users) {
      const updatedWallet = await updateWallet(user.addressDecimal);

      if (updatedWallet === user.addressDecimal) {
        continue
      }

      await User.updateOne(
        { addressDecimal: user.addressDecimal },
        { $set: { addressDecimal: updatedWallet } }
      )
    }

  } catch (error) {
    console.error(error.message)
  }
}

const main = async () => {
  try {
    await connect('mongodb://127.0.0.1:27017/cashback_bot')
    console.log('MongoDB connected')
    await updateDecimalWallet()

  } catch (error) {
    console.error('Error in main:', error)
  }
}

(async () => {
  await main()
})()