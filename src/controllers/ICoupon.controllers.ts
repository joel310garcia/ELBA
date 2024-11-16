import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import {
  insertICoupon,
  getICoupons,
  getICoupon,
  updateICoupon,
  deleteICoupon,
} from "../services/ICoupon.services";
import { handleHttp } from "../utils/error.handle";

const postCoupon = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertICoupon(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_Coupon", e);
  }
};


const getCoupons = async (req: Request, res: Response) => {
  try {
    const response = await getICoupons();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_Coupons");
  }
};

const getCoupon = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getICoupon(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_Coupon");
  }
};



const updateCoupon = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateICoupon(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_Coupon");
  }
};


const deleteCoupon = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteICoupon(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_Coupon");
  }
};

export { postCoupon, getCoupons, getCoupon, updateCoupon, deleteCoupon };
