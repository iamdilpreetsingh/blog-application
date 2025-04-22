import { Router } from "express";

import { authController } from "@/controllers";
import { authenticate } from "@/middlewares";

const authRouter = Router();

authRouter.route("/login").post(authController.login);
// authRouter.route("/signup").post(authController.signup);
authRouter
  .route("/change-password")
  .post(authenticate, authController.changePassword);
// authRouter.route("/reset-password").post(authController.resetPassword);

export default authRouter;
