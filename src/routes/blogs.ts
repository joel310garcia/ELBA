import { Request, Response, Router } from "express";
import {getIblog, getIblogs, updateIblog, postIblog, deleteIblog
} from "../controllers/blog";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getIblogs);

router.get("/:id", logMiddleware, getIblog);

router.post("/", postIblog);

router.put("/:id", updateIblog);

router.delete("/:id", deleteIblog);

export { router };
