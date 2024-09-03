import mongoose, { model } from 'mongoose'
const { Schema } = mongoose

const heightSchema = new Schema(
  {
    lastHeightCrossFI: {
      type: Number,
      trim: true,
    },

    lastHeightDecimal: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    autoIndex: true,
  }
)

const Height = model('Height', heightSchema)
export default Height
