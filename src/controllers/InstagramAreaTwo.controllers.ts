import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import {insertInstagramAreaTwo, getInstagramAreaTwos, getInstagramAreaTwo, updateInstagramAreaTwo, deleteInstagramAreaTwo
} from "../services/InstagramAreaTwo.services";
import { handleHttp } from "../utils/error.handle";

const postINstagramAreaTwo = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertInstagramAreaTwo(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_InstagramAreaTwo", e);
  }
};


const getINstagramAreaTwos = async (req: Request, res: Response) => {
  try {
    const response = await getInstagramAreaTwos();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_InstagramAreaTwos");
  }
};

const getINstagramAreaTwo = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getInstagramAreaTwo(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_InstagramAreaTwo");
  }
};



const updateINstagramAreaTwo = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateInstagramAreaTwo(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_InstagramAreaTwo");
  }
};


const deleteINstagramAreaTwo = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteInstagramAreaTwo(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_InstagramAreaTwo");
  }
};

export { postINstagramAreaTwo, getINstagramAreaTwos, getINstagramAreaTwo, updateINstagramAreaTwo, deleteINstagramAreaTwo };
