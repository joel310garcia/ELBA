import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import {
  insertfeatureProdBeauty, getfeatureProdBeautys, getfeatureProdBeauty, updatefeatureProdBeauty, deletefeatureProdBeauty} from "../services/featureProdBeautyModel.services";
import { handleHttp } from "../utils/error.handle";

const postFeatureProdBeauty = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertfeatureProdBeauty(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_featureProdBeauty", e);
  }
};


const getFeatureProdBeautys = async (req: Request, res: Response) => {
  try {
    const response = await getfeatureProdBeautys();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_featureProdBeautys");
  }
};

const getFeatureProdBeauty = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getfeatureProdBeauty(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_featureProdBeauty");
  }
};



const updateFeatureProdBeauty = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updatefeatureProdBeauty(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_featureProdBeauty");
  }
};


const deleteFeatureProdBeauty = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deletefeatureProdBeauty(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_featureProdBeauty");
  }
};

export { postFeatureProdBeauty, getFeatureProdBeautys, getFeatureProdBeauty, updateFeatureProdBeauty, deleteFeatureProdBeauty };
