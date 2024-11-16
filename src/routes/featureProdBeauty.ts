import { Request, Response, Router } from "express";
import {postFeatureProdBeauty, getFeatureProdBeautys, getFeatureProdBeauty, updateFeatureProdBeauty, deleteFeatureProdBeauty
} from "../controllers/featureProdBeauty.controllers";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getFeatureProdBeautys);

router.get("/:id", logMiddleware, getFeatureProdBeauty);

router.post("/", postFeatureProdBeauty);

router.put("/:id", updateFeatureProdBeauty);

router.delete("/:id", deleteFeatureProdBeauty);

export { router };
