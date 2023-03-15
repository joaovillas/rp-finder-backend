import { Router } from "express";
import { responseHandler } from "../../utils/response";
import userService from "../../services/user.service";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const userId = req.headers["X-UserId"];
    const user = await userService.getUserById(userId as string);
    return res.status(201).send(user);
  } catch (err) {
    responseHandler(err, res);
  }
});

export default router;
