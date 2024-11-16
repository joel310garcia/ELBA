import { IProduct } from "../interfaces/product-type";
import IProductModel from "../models/IProduct.models";

const insertIProduct = async (product: IProduct) => {
  const responseInsert = await IProductModel.create(product);
  return responseInsert;
};

const getIProducts = async () => {
  const responseItem = await IProductModel.find({});
  return responseItem;
};

const getIProduct = async (id: string) => {
  const responseItem = await IProductModel.findOne({ _id: id });
  return responseItem;
};

const updateIProduct = async (id: string, data: IProduct) => {
  const responseItem = await IProductModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

const deleteIProduct = async (id: string) => {
  const responseItem = await IProductModel.remove({ _id: id });
  return responseItem;
};

export { insertIProduct, getIProducts, getIProduct, updateIProduct, deleteIProduct };
