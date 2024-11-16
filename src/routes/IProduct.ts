import { Request, Response, Router } from "express";
import {
  postProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/IProduct.controllers";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getProducts);

router.get("/:id", logMiddleware, getProduct);

router.post("/", postProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export { router };
