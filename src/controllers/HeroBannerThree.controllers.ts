import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import {
  insertHeroBannerThree, 
  getHeroBannerThrees, 
  getHeroBannerThree, 
  updateHeroBannerThree, 
  deleteHeroBannerThree
} from "../services/HeroBannerThree.services";
import { handleHttp } from "../utils/error.handle";

const postHHeroBannerThree = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertHeroBannerThree(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_HeroBannerThree", e);
  }
};


const getHHeroBannerThrees = async (req: Request, res: Response) => {
  try {
    const response = await getHeroBannerThrees();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_HeroBannerThrees");
  }
};

const getHHeroBannerThree = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getHeroBannerThree(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_HeroBannerThree");
  }
};



const updateHHeroBannerThree = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateHeroBannerThree(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_HeroBannerThree");
  }
};


const deleteHHeroBannerThree = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteHeroBannerThree(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_HeroBannerThree");
  }
};

export { postHHeroBannerThree, getHHeroBannerThrees, getHHeroBannerThree, updateHHeroBannerThree, deleteHHeroBannerThree };
