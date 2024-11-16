import { HeroBannerTwo } from "../interfaces/HeroBannerTwo.type";
import HeroBannerTwoModel from "../models/HeroBannerTwo.models";

const insertHeroBannerTwo = async (product: HeroBannerTwo) => {
  const responseInsert = await HeroBannerTwoModel.create(product);
  return responseInsert;
};

const getHeroBannerTwos = async () => {
  const responseItem = await HeroBannerTwoModel.find({});
  return responseItem;
};

const getHeroBannerTwo = async (id: string) => {
  const responseItem = await HeroBannerTwoModel.findOne({ _id: id });
  return responseItem;
};

const updateHeroBannerTwo = async (id: string, data: HeroBannerTwo) => {
  const responseItem = await HeroBannerTwoModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

const deleteHeroBannerTwo = async (id: string) => {
  const responseItem = await HeroBannerTwoModel.remove({ _id: id });
  return responseItem;
};

export { insertHeroBannerTwo, getHeroBannerTwos, getHeroBannerTwo, updateHeroBannerTwo, deleteHeroBannerTwo };
