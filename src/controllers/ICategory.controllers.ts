import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import {
  insertICategory,
  getICategories,
  getICategory,
  updateICategory,
  deleteICategory,
} from "../services/ICategory.services";
import { handleHttp } from "../utils/error.handle";

const postCategory = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertICategory(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_Category", e);
  }
};


const getCategories = async (req: Request, res: Response) => {
  try {
    const response = await getICategories();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_Categories");
  }
};

const getCategory = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getICategory(id);
    const data = response ? response : "NOT_FOUND_category" ;
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_Category");
  }
};



const updateCategory = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateICategory(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_Category");
  }
};


const deleteCategory = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteICategory(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_Category");
  }
};

export { postCategory, getCategories, getCategory, updateCategory, deleteCategory };
