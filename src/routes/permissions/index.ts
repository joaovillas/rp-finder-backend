import { Router } from "express";
import permissionsService from "../../services/permissions.service";
import { responseHandler } from "../../utils/response";

const router = Router();

router.get("/user", async (req, res) => {
  try {
    const userId = req.headers["X-UserId"];
    const permissions = await permissionsService.getPermissionByUserId(
      userId as string
    );
    return res.status(200).send(permissions);
  } catch (err) {
    responseHandler(err, res);
  }
});


export default router;
