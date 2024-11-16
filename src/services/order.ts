import { IProduct } from "../interfaces/product-type";
import IProductModel from "../models/IProduct.models";

const getOrders = async () => {
  const responseItem = await IProductModel.find({});
  return responseItem;
};

export { getOrders };
