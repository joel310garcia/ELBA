import { IBrand } from "../interfaces/brand-type";
import IBrandModel from "../models/brand.models";

const insertIBrand= async (brand: IBrand) => {
  const responseInsert = await IBrandModel.create(brand);
  return responseInsert;
};

const getIBrands = async () => {
  const responseItem = await IBrandModel.find({});
  return responseItem;
};

const getIBrand = async (id: string) => {
  const responseItem = await IBrandModel.findOne({ _id: id });
  return responseItem;
};

const updateIBrand = async (id: string, data: IBrand) => {
  const responseItem = await IBrandModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

const deleteIBrand = async (id: string) => {
  const responseItem = await IBrandModel.remove({ _id: id });
  return responseItem;
};

export { insertIBrand, getIBrands, getIBrand, updateIBrand, deleteIBrand };
