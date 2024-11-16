import { Request, Response } from "express";

import dbConnect from "../config/mongo";

import { handleHttp } from "../utils/error.handle";

import {insertIBlog, getIBlogs, getIBlog, updateIBlog, deleteIBlog
} from "../services/blog.services";





const postIblog = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertIBlog(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_Blog", e);
  }
};


const getIblogs = async (req: Request, res: Response) => {
  try {
    const response = await getIBlogs();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_Brands");
  }
};

const getIblog = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getIBlog(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_Brand");
  }
};



const updateIblog = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateIBlog(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_Brand");
  }
};


const deleteIblog = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteIBlog(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_Brand");
  }
};
export { postIblog, getIblogs, getIblog, updateIblog, deleteIblog };