import { Router } from "express";
import permissionsService from "../../services/permissions.service";
import { RequestValidation } from "../../types/common/Request";
import { PermissionValidator } from "../../types/Permission";
import { responseHandler } from "../../utils/response";

const router = Router();

router.post(
  "/permission/assign",
  async (
    req: RequestValidation<{ userId: string; permissionId: string }>,
    res
  ) => {
    try {
      const permissions = await permissionsService.assignPermissionToUser(
        req.body.userId,
        req.body.permissionId
      );
      return res.status(200).send(permissions);
    } catch (err) {
      responseHandler(err, res);
    }
  }
);

router.get("/permission", async (req, res) => {
  try {
    const permissions = await permissionsService.getPermissions();
    return res.status(200).send(permissions);
  } catch (err) {
    responseHandler(err, res);
  }
});

router.post(
  "/permission/create",
  async (req: RequestValidation<PermissionValidator>, res) => {
    try {
      const permissions = await permissionsService.createPermission(req.body);
      return res.status(200).send(permissions);
    } catch (err) {
      responseHandler(err, res);
    }
  }
);

export default router;
