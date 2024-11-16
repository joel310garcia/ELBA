import { Request, Response, Router } from "express";
import {postHHeroBannerOne, getHHeroBannerOnes, getHHeroBannerOne, updateHHeroBannerOne, deleteHHeroBannerOne
} from "../controllers/HeroBannerOne.controllers";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getHHeroBannerOnes);

router.get("/:id", logMiddleware, getHHeroBannerOne);

router.post("/", postHHeroBannerOne);

router.put("/:id", updateHHeroBannerOne);

router.delete("/:id", deleteHHeroBannerOne);

export { router };
