import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { JWT_EXPIRY } from "@/utils/auth.utils";

export default {
  validateUser: async (enteredPassword, savedPassword) => {
    return await bcrypt.compare(enteredPassword, savedPassword);
  },
  generateUserToken: async (user) => {
    const payload = { id: user._id, email: user.email };
    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: JWT_EXPIRY,
    });
  },
};
