import { Request, Response, Router } from "express";
import {
    postINstagramAreaTwo,
     getINstagramAreaTwos,
      getINstagramAreaTwo,
       updateINstagramAreaTwo,
        deleteINstagramAreaTwo
} from "../controllers/InstagramAreaTwo.controllers";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getINstagramAreaTwos);

router.get("/:id", logMiddleware, getINstagramAreaTwo);

router.post("/", postINstagramAreaTwo);

router.put("/:id", updateINstagramAreaTwo);

router.delete("/:id", deleteINstagramAreaTwo);

export { router };
