import { Router } from "express";

import { default as userRoute } from "./user";
import { default as serverRoute } from "./servers";

const routes = Router();

routes.use("/user", userRoute);
routes.use("/server", serverRoute);

export default routes;
