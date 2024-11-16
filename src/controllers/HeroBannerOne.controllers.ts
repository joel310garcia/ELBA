import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import {insertHeroBannerOne, getHeroBannerOnes, getHeroBannerOne, updateHeroBannerOne, deleteHeroBannerOne
} from "../services/HeroBannerOne.services ";
import { handleHttp } from "../utils/error.handle";

const postHHeroBannerOne = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertHeroBannerOne(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_HeroBannerOne", e);
  }
};


const getHHeroBannerOnes = async (req: Request, res: Response) => {
  try {
    const response = await getHeroBannerOnes();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_HeroBannerOnes");
  }
};

const getHHeroBannerOne = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getHeroBannerOne(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_HeroBannerOne");
  }
};



const updateHHeroBannerOne = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateHeroBannerOne(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_HeroBannerOne");
  }
};


const deleteHHeroBannerOne = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteHeroBannerOne(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_HeroBannerOne");
  }
};

export { postHHeroBannerOne, getHHeroBannerOnes, getHHeroBannerOne, updateHHeroBannerOne, deleteHHeroBannerOne };
