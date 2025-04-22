import { Router } from "express";
import authRouter from "@/routes/api/v1/auth";

const v1Router = Router();
const routes = new Map(["/auth", authRouter]);
routes.forEach((path, router) => {
  v1Router.use(path, router);
});

export default v1Router;
