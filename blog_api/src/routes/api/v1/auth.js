import { Router } from "express";
import { authController } from "@/controllers";

const AuthRouter = Router();

AuthRouter.route("/login").post(authController.login);
AuthRouter.route("/signup").post(authController.signup);
AuthRouter.route("/changePassword").post(authController.changePassword);
AuthRouter.route("/resetPassword").post(authController.resetPassword);

export default AuthRouter;
