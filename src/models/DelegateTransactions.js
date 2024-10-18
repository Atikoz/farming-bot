import mongoose, { model } from 'mongoose'
const { Schema } = mongoose

const DelegateTransactionsSchema = new Schema(
  {
    hash: {
      type: String,
      required: true,
      trim: true,
    },

    amount: {
      type: Number,
      required: true,
      trim: true,
    },

    coin: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    autoIndex: true,
  }
)

const DelegateTransactions = model('Delegate-Transactions', DelegateTransactionsSchema)
export default DelegateTransactions
