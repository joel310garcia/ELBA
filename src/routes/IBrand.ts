import { Request, Response, Router } from "express";
import {
  postBrand,
  getBrands,
  getBrand,
  updateBrand,
  deleteBrand,
} from "../controllers/IBrand.controllers";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getBrands);

router.get("/:id", logMiddleware, getBrand);

router.post("/", postBrand);

router.put("/:id", updateBrand);

router.delete("/:id", deleteBrand);

export { router };
