import { AboutUs } from "../interfaces/AboutUs.type";
import AboutUsModel from "../models/AboutUs.models";

const insertABoutUs= async (brand: AboutUs) => {
  const responseInsert = await AboutUsModel.create(brand);
  return responseInsert;
};

const getABoutUss = async () => {
  const responseItem = await AboutUsModel.find({});
  return responseItem;
};

const getABoutUs = async (id: string) => {
  const responseItem = await AboutUsModel.findOne({ _id: id });
  return responseItem;
};

const updateABoutUs = async (id: string, data: AboutUs) => {
  const responseItem = await AboutUsModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

const deleteABoutUs = async (id: string) => {
  const responseItem = await AboutUsModel.remove({ _id: id });
  return responseItem;
};

export { insertABoutUs, getABoutUss, getABoutUs, updateABoutUs, deleteABoutUs };
