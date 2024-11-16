import { Request, Response, Router } from "express";
import {
  postBanner,
  getBanners,
  getBanner,
  updateBanner,
  deleteBanner,
} from "../controllers/IProductBanner.controllers";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getBanners);

router.get("/:id", logMiddleware, getBanner);

router.post("/", postBanner);

router.put("/:id", updateBanner);

router.delete("/:id", deleteBanner);

export { router };
