import { IRefferalTable, RefferalNicks, ReffersNicks } from "../interface/IRefferalTable";
import User from "../src/models/User"


const createRefferalTable = async (userId: number): Promise<IRefferalTable> => {
  try {
    const user = await User.findOne({ _id: userId });

    if (!user) {
      throw new Error(`User with ID ${userId} not found`);
    }

    const [referrer1, referrer2, referrer3] = await Promise.all([
      user.referrer ? User.findOne({ _id: user.referrer }).exec() : null,
      user.referrer2 ? User.findOne({ _id: user.referrer2 }).exec() : null,
      user.referrer3 ? User.findOne({ _id: user.referrer3 }).exec() : null,
    ]);

    const reffersNicks: ReffersNicks = {
      referrer1: {
        id: referrer1._id,
        userName: referrer1.userName
      },

      referrer2: {
        id: referrer2._id,
        userName: referrer2.userName
      },

      referrer3: {
        id: referrer3._id,
        userName: referrer3.userName
      },
    };

    const [referrals1, referrals2, referrals3] = await Promise.all([
      User.find({ referrer: userId }).exec(),
      User.find({ referrer2: userId }).exec(),
      User.find({ referrer3: userId }).exec(),
    ]);

    const referralNicks: RefferalNicks = {
      level1: referrals1.map(ref => ({
        id: ref._id,
        userName: ref.userName
      })),

      level2: referrals2.map(ref => ({
        id: ref._id,
        userName: ref.userName
      })),

      level3: referrals3.map(ref => ({
        id: ref._id,
        userName: ref.userName
      })),
    };

    return {
      reffersNicks,
      referralNicks
    }

  } catch (error) {
    console.error('error create refferal table:', error)
  }
}

export default createRefferalTable