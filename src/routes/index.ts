import { Router } from "express";

import { default as userRoute } from "./user";
import { default as serverRoute } from "./servers";
import { default as permissionsRoute } from "./permissions";
import { default as adminRoute } from "./admin";
import { default as avaliationRoute } from "./avaliation";

import { isAuth } from "../middlewares/auth";
import { isAdmin } from "../middlewares/permission";

const routes = Router();

routes.use("/user", userRoute);
routes.use("/server", serverRoute);
routes.use("/avaliation", avaliationRoute);
routes.use("/user/permissions", permissionsRoute);
routes.use("/admin", isAuth, isAdmin, adminRoute);

export default routes;
