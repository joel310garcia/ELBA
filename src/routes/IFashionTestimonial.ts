import { Request, Response, Router } from "express";
import {
  postTestimonial,
  getTestimonials,
  getTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from "../controllers/IFashionTestimonial.controllers";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getTestimonials);

router.get("/:id", logMiddleware, getTestimonial);

router.post("/", postTestimonial);

router.put("/:id", updateTestimonial);

router.delete("/:id", deleteTestimonial);

export { router };
