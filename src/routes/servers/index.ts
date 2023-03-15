import { Router } from "express";
import { Server } from "../../../prisma/client";
import serverService from "../../services/server.service";
import { RequestValidation } from "../../types/common/Request";
import { responseHandler } from "../../utils/response";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const servers = await serverService.getAll();
    return res.send(servers);
  } catch (err) {
    responseHandler(err, res);
  }
});

router.post("/", async (req: RequestValidation<Server>, res) => {
  try {
    console.log(req.body)
    const server = await serverService.create(req.body);
    return res.status(201).send(server);
  } catch (err) {
    responseHandler(err, res);
  }
});

router.get("/detail/:id", async (req, res) => {
  try {
    const server = await serverService.getServerById(req.params.id as string);
    return res.send(server);
  } catch (err) {
    responseHandler(err, res);
  }
});

router.get("/tag", async (req, res) => {
  try {
    const servers = await serverService.getServerByTags(req.query.q as string);
    return res.status(200).send(servers);
  } catch (err) {
    responseHandler(err, res);
  }
});

router.get("/tags", async (req, res) => {
  try {
    const servers = await serverService.getAllServerTags();
    return res.send(servers);
  } catch (err) {
    responseHandler(err, res);
  }
});

export default router;
