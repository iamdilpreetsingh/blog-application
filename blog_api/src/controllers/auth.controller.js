import { authValidator } from "@/validators";
import { authService } from "@/services";
import { userAuthTokenOptions } from "@/utils/auth.utils";

export default {
  login: async (request, response) => {
    try {
      const validatedData = await authValidator.login.validateAsync(
        request.body,
        {
          convert: true,
        }
      );

      const userData = await authService.login(validatedData);

      return response
        .cookie("access_token", userData.token, userAuthTokenOptions())
        .status(200)
        .json(userData.user);
    } catch (err) {
      console.error(err);
      return response.status(err.status || 500).json({
        message: err.message || "Something went wrong, try again",
      });
    }
  },
  signup: async (request, response) => {
    try{}catch(){}
  },
  changePassword: async () => {},
  responseetPassword: async () => {},
};
