import { authValidator } from "@/validators";
import { authRepository } from "@/repositories";
import { authService } from "@/services";
import { UserAuthTokenOptions } from "@/utils/auth.utils";

export default {
  login: async (request, response) => {
    try {
      const validatedData = await authValidator.login.validateAsync(
        request.body,
        {
          convert: true,
        }
      );
      const { email, password } = validatedData;

      const user = authRepository.findUser(email);
      if (!user) {
        return response.status(401).json({
          success: false,
          message: "User is not registered",
        });
      }

      const isMatch = authService.validateUser(password, user.password);
      if (!isMatch) {
        return response.status(401).json({
          success: false,
          message: "Incorrect password",
        });
      }

      const token = authService.generateUserToken(user);
      const userObj = user.toObject();
      delete userObj.password;

      return response
        .cookie("access_token", token, UserAuthTokenOptions)
        .status(200)
        .json({
          success: true,
          user: userObj,
          message: "User logged in successfully",
        });
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        success: false,
        message: "Something went wrong, try again",
      });
    }
  },

  signup: async () => {},
  changePassword: async () => {},
  responseetPassword: async () => {},
};
