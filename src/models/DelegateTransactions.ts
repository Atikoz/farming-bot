import mongoose, { Model, Schema, Document } from 'mongoose'

export interface IDelegateTransactions {
  hash: string,
  amount: number,
  coin: string,
  createdAt?: Date;
  updatedAt?: Date;
}

const DelegateTransactionsSchema = new Schema<IDelegateTransactions>(
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

const DelegateTransactions: Model<IDelegateTransactions> = mongoose.model('Delegate-Transactions', DelegateTransactionsSchema);

export default DelegateTransactions
