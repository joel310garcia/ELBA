import { HeroBannerOne } from "../interfaces/HeroBannerOne.type";
import HeroBannerOneModel from "../models/HeroBannerOne.models ";

const insertHeroBannerOne = async (product: HeroBannerOne) => {
  const responseInsert = await HeroBannerOneModel.create(product);
  return responseInsert;
};

const getHeroBannerOnes = async () => {
  const responseItem = await HeroBannerOneModel.find({});
  return responseItem;
};

const getHeroBannerOne = async (id: string) => {
  const responseItem = await HeroBannerOneModel.findOne({ _id: id });
  return responseItem;
};

const updateHeroBannerOne = async (id: string, data: HeroBannerOne) => {
  const responseItem = await HeroBannerOneModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

const deleteHeroBannerOne = async (id: string) => {
  const responseItem = await HeroBannerOneModel.remove({ _id: id });
  return responseItem;
};

export { insertHeroBannerOne, getHeroBannerOnes, getHeroBannerOne, updateHeroBannerOne, deleteHeroBannerOne };
