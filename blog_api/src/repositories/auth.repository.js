import { User } from "@/models";

export default {
  findUser: async (email) => {
    try {
      return await User.findOne({ email });
    } catch (error) {
      console.error("Error while finding user : ", error);
      throw new Error("Internal Server Error");
    }
  },
};
