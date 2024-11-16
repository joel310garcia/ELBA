import { Request, Response, Router } from "express";
import {
  postCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/ICategory.controllers";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getCategories);

router.get("/:id", logMiddleware, getCategory);

router.post("/", postCategory);

router.put("/:id", updateCategory);

router.delete("/:id", deleteCategory);

export { router };
