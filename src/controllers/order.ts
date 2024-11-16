import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext";
import { handleHttp } from "../utils/error.handle";

const getIProduct = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "ESTO SOLO LO VE LAS PERSONAS CON SESSION / JWT",
      user: req.user,
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_USERS");
  }
};

export { getIProduct };
