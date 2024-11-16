import { ICoupon } from "../interfaces/coupon-type";
import ICouponModel from "../models/ICoupon.models";

const insertICoupon = async (product: ICoupon) => {
  const responseInsert = await ICouponModel.create(product);
  return responseInsert;
};

const getICoupons = async () => {
  const responseItem = await ICouponModel.find({});
  return responseItem;
};

const getICoupon = async (id: string) => {
  const responseItem = await ICouponModel.findOne({ _id: id });
  return responseItem;
};

const updateICoupon = async (id: string, data: ICoupon) => {
  const responseItem = await ICouponModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

const deleteICoupon = async (id: string) => {
  const responseItem = await ICouponModel.remove({ _id: id });
  return responseItem;
};

export { insertICoupon, getICoupons, getICoupon, updateICoupon, deleteICoupon };
