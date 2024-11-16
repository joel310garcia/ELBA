import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import {
  insertIBrand,
  getIBrands,
  getIBrand,
  updateIBrand,
  deleteIBrand,
} from "../services/IBrand.services";
import { handleHttp } from "../utils/error.handle";

const postBrand = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertIBrand(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_Brand", e);
  }
};


const getBrands = async (req: Request, res: Response) => {
  try {
    const response = await getIBrands();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_Brands");
  }
};

const getBrand = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getIBrand(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_Brand");
  }
};



const updateBrand = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateIBrand(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_Brand");
  }
};


const deleteBrand = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteIBrand(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_Brand");
  }
};

export { postBrand, getBrands, getBrand, updateBrand, deleteBrand };
