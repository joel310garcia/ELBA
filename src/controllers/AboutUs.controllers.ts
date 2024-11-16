import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import {insertABoutUs, getABoutUss, getABoutUs, updateABoutUs, deleteABoutUs} from "../services/AboutUs.services";
import { handleHttp } from "../utils/error.handle";

const postAboutUs = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertABoutUs(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_AboutUs", e);
  }
};


const getAboutUss = async (req: Request, res: Response) => {
  try {
    const response = await getABoutUss();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_AboutUsss");
  }
};

const getAboutUs = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getABoutUs(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_AboutUs");
  }
};



const updateAboutUs = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateABoutUs(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_AboutUs");
  }
};


const deleteAboutUs = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteABoutUs(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_AboutUs");
  }
};

export { postAboutUs, getAboutUss, getAboutUs, updateAboutUs, deleteAboutUs };
