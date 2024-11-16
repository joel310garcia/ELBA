import { Request, Response, Router } from "express";
import {
  postCoupon,
  getCoupons,
  getCoupon,
  updateCoupon,
  deleteCoupon,
} from "../controllers/ICoupon.controllers";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getCoupons);

router.get("/:id", logMiddleware, getCoupon);

router.post("/", postCoupon);

router.put("/:id", updateCoupon);

router.delete("/:id", deleteCoupon);

export { router };
