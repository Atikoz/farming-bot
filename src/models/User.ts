import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser {
  _id: number;
  userName: string;
  addressCrossFi?: string;
  addressDecimal?: string;
  referrer: number;
  referrer2: number;
  referrer3: number;
  createdAt?: Date;
  updatedAt?: Date;
  delegator?: boolean;
  delegatedAmount?: number
}

const userSchema = new Schema<IUser>(
  {
    _id: {
      type: Number,
      required: true,
      trim: true,
    },

    userName: {
      type: String,
      required: false,
      trim: true,
      default: ''
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
      type: Number,
      trim: true,
      required: true,
      index: true,
      ref: 'User',
    },

    referrer2: {
      type: Number,
      trim: true,
      required: true,
      index: true,
      ref: 'User',
    },

    referrer3: {
      type: Number,
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

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User
