import { Request, Response, Router } from "express";
import { postAboutUs, getAboutUss, getAboutUs, updateAboutUs, deleteAboutUs
} from "../controllers/AboutUs.controllers";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getAboutUss);

router.get("/:id", logMiddleware, getAboutUs);

router.post("/", postAboutUs);

router.put("/:id", updateAboutUs);

router.delete("/:id", deleteAboutUs);

export { router };
