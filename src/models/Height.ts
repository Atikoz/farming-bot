import mongoose, { Model, Schema } from 'mongoose'

interface IHeight {
  lastHeightCrossFI: number,
  lastHeightDecimal: string,
  createdAt?: Date;
  updatedAt?: Date;
}

const heightSchema = new Schema<IHeight>(
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

const Height: Model<IHeight> = mongoose.model<IHeight>('Height', heightSchema)
export default Height
