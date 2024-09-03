import mongoose, { model } from 'mongoose'
const { Schema } = mongoose

const rewardSchema = new Schema(
  {
    network: {
      type: String,
      enum: ['crossFi', 'decimal'],
      required: true,
    },
    address: {
      type: String,
      required: true,
      index: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    txId: {
      type: String,
    },
  },
  {
    timestamps: true,
    autoIndex: true,
  }
)

const Reward = model('Reward', rewardSchema)
export default Reward
