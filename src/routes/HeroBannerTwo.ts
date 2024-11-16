import { Request, Response, Router } from "express";
import {postHHeroBannerTwo, getHHeroBannerTwos, getHHeroBannerTwo, updateHHeroBannerTwo, deleteHHeroBannerTwo
} from "../controllers/HeroBannerTwo.controllers";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getHHeroBannerTwos);

router.get("/:id", logMiddleware, getHHeroBannerTwo);

router.post("/", postHHeroBannerTwo);

router.put("/:id", updateHHeroBannerTwo);

router.delete("/:id", deleteHHeroBannerTwo);

export { router };
