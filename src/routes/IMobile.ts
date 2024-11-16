import { Request, Response, Router } from "express";
import {
  postMobile,
  getMobiles,
  getMobile,
  updateMobile,
  deleteIMobileI
} from "../controllers/IMobileType.controllers";
import { logMiddleware } from "../middleware/log";

const router = Router();

////////////////////////////////////////////

router.post("/", postMobile);

/////////////////////////////////////////////

router.get("/", getMobiles);

//////////////////////////////////////////////

router.get("/:id", logMiddleware, getMobile);
///////////////////////////////////////////////

router.put("/:id", updateMobile);

///////////////////////////////////////////////

router.delete("/:id", deleteIMobileI);

////////////////////////////////////////////////

export { router };
