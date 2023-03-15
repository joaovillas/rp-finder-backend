import { Router } from "express";
import { RequestValidation } from "../../types/common/Request";
import { User } from "@prisma/client";
import authService from "../../services/auth.service";
import { responseHandler } from "../../utils/response";
import { Login, UserValidator } from "../../types/User";

const router = Router();

router.post("/register", async (req: RequestValidation<User>, res) => {
  try {
    const user = await authService.createUser(req.body);
    return res.status(201).send(user);
  } catch (err) {
    responseHandler(err, res);
  }
});

router.post("/login", async (req: RequestValidation<Login>, res) => {
  try {
    const user = await authService.login(req.body);
    return res.status(200).send(user);
  } catch (err) {
    responseHandler(err, res);
  }
});

export default router;
