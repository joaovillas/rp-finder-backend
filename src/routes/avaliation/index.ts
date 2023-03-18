import { Router } from "express";
import avaliationService from "../../services/avaliation.service";
import { AvaliationValidator } from "../../types/Avaliation";
import { RequestValidation } from "../../types/common/Request";
import { responseHandler } from "../../utils/response";

const router = Router();

router.post("/", async (req: RequestValidation<AvaliationValidator>, res) => {
  try {
    const userId = req.headers["X-UserId"];

    const avaliation = await avaliationService.createAvaliation({
      grade: req.body.grade,
      serverId: req.body.serverId,
      userId: userId as string,
    });

    return res.status(200).send(avaliation);
  } catch (err) {
    responseHandler(err, res);
  }
});

router.get("/:serverUUID", async (req, res) => {
  try {
    const avaliations = await avaliationService.getAvaliations(
      req.params.serverUUID
    );

    return res.status(200).send(avaliations);
  } catch (err) {
    responseHandler(err, res);
  }
});

export default router;
