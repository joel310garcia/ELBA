import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import {
  insertIProduct,
  getIProducts,
  getIProduct,
  updateIProduct,
  deleteIProduct,
} from "../services/IProduct.services";
import { handleHttp } from "../utils/error.handle";

const postProduct = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertIProduct(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_Product", e);
  }
};


const getProducts = async (req: Request, res: Response) => {
  try {
    const response = await getIProducts();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_Products");
  }
};

const getProduct = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getIProduct(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_Product");
  }
};



const updateProduct = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateIProduct(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_Product");
  }
};


const deleteProduct = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteIProduct(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_Product");
  }
};

export { postProduct, getProducts, getProduct, updateProduct, deleteProduct };
