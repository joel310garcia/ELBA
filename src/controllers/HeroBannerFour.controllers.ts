import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import {
  insertHeroBannerFour, 
  getHeroBannerFours, 
  getHeroBannerFour, 
  updateHeroBannerFour, 
  deleteHeroBannerFour
} from "../services/HeroBannerFour.services";
import { handleHttp } from "../utils/error.handle";

const postHHeroBannerFour = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertHeroBannerFour(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_HeroBannerFour", e);
  }
};


const getHHeroBannerFours = async (req: Request, res: Response) => {
  try {
    const response = await getHeroBannerFours();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_HeroBannerFours");
  }
};

const getHHeroBannerFour = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getHeroBannerFour(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_HeroBannerFour");
  }
};



const updateHHeroBannerFour = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateHeroBannerFour(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_HeroBannerFour");
  }
};


const deleteHHeroBannerFour = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteHeroBannerFour(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_HeroBannerFour");
  }
};

export { postHHeroBannerFour, getHHeroBannerFours, getHHeroBannerFour, updateHHeroBannerFour, deleteHHeroBannerFour };
