import express, { json } from "express";
import { Server } from "http";
import helmet from "helmet";
import mongoose from "mongoose";
import { MONGODB_URI } from "@/settings";
import routes from "@/routes";

function getRequestListener() {
  const application = express();
  application.use(helmet());
  application.use(json());

  routes.forEach((path, router) => {
    application.use(path, router);
  });

  return application;
}

export default async function bootstrap(port, host) {
  const requestListener = getRequestListener();
  const serverOptions = {};
  const server = new Server(serverOptions, requestListener);
  await mongoose
    .connect(MONGODB_URI)
    .then(() => console.info("MongoDB connection successful"))
    .catch((err) => console.error("MongoDB connection error:", err));
  server.listen(port, host, () => {
    console.info(server.address());
  });
}
