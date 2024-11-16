import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import {insertHeroBannerTwo, getHeroBannerTwos, getHeroBannerTwo, updateHeroBannerTwo, deleteHeroBannerTwo
} from "../services/HeroBannerTwo.services";
import { handleHttp } from "../utils/error.handle";

const postHHeroBannerTwo = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertHeroBannerTwo(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_HeroBannerTwo", e);
  }
};


const getHHeroBannerTwos = async (req: Request, res: Response) => {
  try {
    const response = await getHeroBannerTwos();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_HeroBannerTwos");
  }
};

const getHHeroBannerTwo = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getHeroBannerTwo(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_HeroBannerTwo");
  }
};



const updateHHeroBannerTwo = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateHeroBannerTwo(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_HeroBannerTwo");
  }
};


const deleteHHeroBannerTwo = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteHeroBannerTwo(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_HeroBannerTwo");
  }
};

export { postHHeroBannerTwo, getHHeroBannerTwos, getHHeroBannerTwo, updateHHeroBannerTwo, deleteHHeroBannerTwo };
