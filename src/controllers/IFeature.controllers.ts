import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import {
  insertIFeature,
  getIFeatures,
   getIFeature,
    updateIFeature,
     deleteIFeature
} from "../services/IFeature.services";
import { handleHttp } from "../utils/error.handle";

const postIfeature = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertIFeature(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_IFeature", e);
  }
};


const getIfeatures = async (req: Request, res: Response) => {
  try {
    const response = await getIFeatures();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_IFeatures");
  }
};

const getIfeature = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getIFeature(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_IFeature");
  }
};



const updateIfeature = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateIFeature(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_IFeature");
  }
};


const deleteIfeature = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteIFeature(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_IFeature");
  }
};

export { 
  postIfeature,
   getIfeatures,
    getIfeature,
     updateIfeature,
      deleteIfeature };
