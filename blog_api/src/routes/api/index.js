import { Router } from "express";
import v1Router from "@/routes/api/v1";

const apiRouter = Router();
const routes = new Map(["/v1", v1Router]);
routes.forEach((path, router) => {
  apiRouter.use(path, router);
});

export default apiRouter;
