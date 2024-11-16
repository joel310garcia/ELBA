import { Request, Response, Router } from "express";
import {
  posthome_pagesModel,


  getgethome_pagesModels,


  gethome_pagesModelI,


  updatehome_pagesModelI,


  deletehome_pagesModelI
} from "../controllers/IMenuItem.controllers";
import { logMiddleware } from "../middleware/log";

const router = Router();

////////////////////////////////////////////

router.post("/", posthome_pagesModel);

/////////////////////////////////////////////

router.get("/", getgethome_pagesModels);

//////////////////////////////////////////////

router.get("/:id", logMiddleware, gethome_pagesModelI);
///////////////////////////////////////////////

router.put("/:id", updatehome_pagesModelI);

///////////////////////////////////////////////

router.delete("/:id", deletehome_pagesModelI);

////////////////////////////////////////////////

export { router };
