import { ICategory } from "../interfaces/category-type";
import ICategorytModel from "../models/ICategory.models";

const insertICategory= async (product: ICategory) => {
  const responseInsert = await ICategorytModel.create(product);
  return responseInsert;
};

const getICategories = async () => {
  const responseItem = await ICategorytModel.find({});
  return responseItem;
};

const getICategory = async (id: string) => {
  const responseItem = await ICategorytModel.findOne({ _id: id });
  return responseItem;
};

const updateICategory = async (id: string, data: ICategory) => {
  const responseItem = await ICategorytModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

const deleteICategory = async (id: string) => {
  const responseItem = await ICategorytModel.remove({ _id: id });
  return responseItem;
};

export { insertICategory, getICategories, getICategory, updateICategory, deleteICategory };
