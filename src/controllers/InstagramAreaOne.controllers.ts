import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import {insertInstagramAreaOne, getInstagramAreaOnes, getInstagramAreaOne, updateInstagramAreaOne, deleteInstagramAreaOne
} from "../services/InstagramAreaOne.services";
import { handleHttp } from "../utils/error.handle";

const postINstagramAreaOne = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertInstagramAreaOne(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_InstagramAreaOne", e);
  }
};


const getINstagramAreaOnes = async (req: Request, res: Response) => {
  try {
    const response = await getInstagramAreaOnes();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_InstagramAreaOnes");
  }
};

const getINstagramAreaOne = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getInstagramAreaOne(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_InstagramAreaOne");
  }
};



const updateINstagramAreaOne = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateInstagramAreaOne(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_InstagramAreaOne");
  }
};


const deleteINstagramAreaOne = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteInstagramAreaOne(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_InstagramAreaOne");
  }
};

export { postINstagramAreaOne, getINstagramAreaOnes, getINstagramAreaOne, updateINstagramAreaOne, deleteINstagramAreaOne };
