import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import {
  insertIProductBanner,
  getIProductBanners,
  getIProductBanner,
  updateIProductBanner,
  deleteIProductBanner,
} from "../services/banner.data.services";
import { handleHttp } from "../utils/error.handle";

const postBanner = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertIProductBanner(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_Banner", e);
  }
};


const getBanners = async (req: Request, res: Response) => {
  try {
    const response = await getIProductBanners();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_Banners");
  }
};

const getBanner = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getIProductBanner(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_Banner");
  }
};



const updateBanner = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateIProductBanner(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_Banner");
  }
};


const deleteBanner = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteIProductBanner(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_Banner");
  }
};

export { postBanner, getBanners, getBanner, updateBanner, deleteBanner };
