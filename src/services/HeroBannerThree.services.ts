import { HeroBannerThree } from "../interfaces/HeroBannerThree.type";
import HeroBannerThreeModel from "../models/HeroBannerThree.models";

const insertHeroBannerThree = async (product: HeroBannerThree) => {
  const responseInsert = await HeroBannerThreeModel.create(product);
  return responseInsert;
};

const getHeroBannerThrees = async () => {
  const responseItem = await HeroBannerThreeModel.find({});
  return responseItem;
};

const getHeroBannerThree = async (id: string) => {
  const responseItem = await HeroBannerThreeModel.findOne({ _id: id });
  return responseItem;
};

const updateHeroBannerThree = async (id: string, data: HeroBannerThree) => {
  const responseItem = await HeroBannerThreeModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

const deleteHeroBannerThree = async (id: string) => {
  const responseItem = await HeroBannerThreeModel.remove({ _id: id });
  return responseItem;
};

export { insertHeroBannerThree, getHeroBannerThrees, getHeroBannerThree, updateHeroBannerThree, deleteHeroBannerThree };
