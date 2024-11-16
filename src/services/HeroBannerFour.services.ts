import { HeroBannerFour } from "../interfaces/HeroBannerFour.type";
import HeroBannerFourModel from "../models/HeroBannerFour.models";

const insertHeroBannerFour = async (product: HeroBannerFour) => {
  const responseInsert = await HeroBannerFourModel.create(product);
  return responseInsert;
};

const getHeroBannerFours = async () => {
  const responseItem = await HeroBannerFourModel.find({});
  return responseItem;
};

const getHeroBannerFour = async (id: string) => {
  const responseItem = await HeroBannerFourModel.findOne({ _id: id });
  return responseItem;
};

const updateHeroBannerFour = async (id: string, data: HeroBannerFour) => {
  const responseItem = await HeroBannerFourModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

const deleteHeroBannerFour = async (id: string) => {
  const responseItem = await HeroBannerFourModel.remove({ _id: id });
  return responseItem;
};

export { insertHeroBannerFour, getHeroBannerFours, getHeroBannerFour, updateHeroBannerFour, deleteHeroBannerFour };
