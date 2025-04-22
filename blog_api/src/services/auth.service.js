import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { JWT_EXPIRY, JWT_SECRET } from "@/settings";
import { authRepository } from "@/repositories";

const validateUser = async (enteredPassword, savedPassword) => {
  return await bcrypt.compare(enteredPassword, savedPassword);
};

const generateUserToken = (user) => {
  const payload = { id: user._id, email: user.email };
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRY,
  });
};

const login = async (validatedData) => {
  const { email, password } = validatedData;
  const user = await authRepository.findUser(email);

  if (!user) {
    const error = new Error("User is not registered");
    error.status = 401;
    throw error;
  }

  const isMatch = await validateUser(password, user.password);
  if (!isMatch) {
    const error = new Error("Incorrect password");
    error.status = 401;
    throw error;
  }

  const token = generateUserToken(user);
  const userObj = user.toObject();
  delete userObj.password;

  return {
    token,
    user: userObj,
  };
};

export default {
  login,
  validateUser,
  generateUserToken,
};
