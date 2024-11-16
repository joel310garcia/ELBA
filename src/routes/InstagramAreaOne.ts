import { Request, Response, Router } from "express";
import {
    postINstagramAreaOne,
     getINstagramAreaOnes,
      getINstagramAreaOne,
       updateINstagramAreaOne,
        deleteINstagramAreaOne
} from "../controllers/InstagramAreaOne.controllers";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getINstagramAreaOnes);

router.get("/:id", logMiddleware, getINstagramAreaOne);

router.post("/", postINstagramAreaOne);

router.put("/:id", updateINstagramAreaOne);

router.delete("/:id", deleteINstagramAreaOne);

export { router };
