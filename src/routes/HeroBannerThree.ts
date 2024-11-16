import { Request, Response, Router } from "express";
import {
    postHHeroBannerThree, 
    getHHeroBannerThrees, 
    getHHeroBannerThree, 
    updateHHeroBannerThree, 
    deleteHHeroBannerThree
} from "../controllers/HeroBannerThree.controllers";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getHHeroBannerThrees);

router.get("/:id", logMiddleware, getHHeroBannerThree);

router.post("/", postHHeroBannerThree);

router.put("/:id", updateHHeroBannerThree);

router.delete("/:id", deleteHHeroBannerThree);

export { router };
