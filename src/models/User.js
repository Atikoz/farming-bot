import mongoose, { model } from 'mongoose'
const { Schema } = mongoose

const userSchema = new Schema(
  {
    _id: {
      type: Number,
      required: true,
      trim: true,
    },

    addressCrossFi: {
      type: String,
      required: false,
      index: true,
    },

    addressDecimal: {
      type: String,
      required: false,
      index: true,
    },

    referrer: {
      type: Schema.Types.Number,
      trim: true,
      required: true,
      index: true,
      ref: 'User',
    },

    referrer2: {
      type: Schema.Types.Number,
      trim: true,
      required: true,
      index: true,
      ref: 'User',
    },

    referrer3: {
      type: Schema.Types.Number,
      trim: true,
      required: true,
      index: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
    autoIndex: true,
  }
)

const User = model('User', userSchema)
export default User
