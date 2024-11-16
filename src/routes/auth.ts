import { Request, Response, Router } from "express";
import { registerCtrl, loginCtrl } from "../controllers/auth";
//*http://localhost:3002/auth/register [post] */
const router = Router();
router.post("/register", registerCtrl);
router.post("/login", loginCtrl);

export { router };
