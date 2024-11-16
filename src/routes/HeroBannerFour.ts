import { Request, Response, Router } from "express";
import {
    postHHeroBannerFour, 
    getHHeroBannerFours, 
    getHHeroBannerFour, 
    updateHHeroBannerFour, 
    deleteHHeroBannerFour
} from "../controllers/HeroBannerFour.controllers";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getHHeroBannerFours);

router.get("/:id", logMiddleware, getHHeroBannerFour);

router.post("/", postHHeroBannerFour);

router.put("/:id", updateHHeroBannerFour);

router.delete("/:id", deleteHHeroBannerFour);

export { router };
