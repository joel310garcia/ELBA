import { Request, Response, Router } from "express";
import {getFile
} from "../controllers/upload";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getFile);

// router.post("/", postregister);

// router.put("/:id", postregister);

// router.delete("/:id", postregister);

export { router };
