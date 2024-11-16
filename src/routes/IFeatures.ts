import { Request, Response, Router } from "express";
import {
  postIfeature,
  getIfeatures,
   getIfeature,
    updateIfeature,
     deleteIfeature
} from "../controllers/IFeature.controllers";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getIfeatures);

router.get("/:id", logMiddleware, getIfeature);

router.post("/", postIfeature);

router.put("/:id", updateIfeature);

router.delete("/:id", deleteIfeature);

export { router };
