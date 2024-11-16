import { IProductBanner } from "../interfaces/IProductBanner";
import IProductBannerModel from "../models/IProductBanner.models";

const insertIProductBanner = async (product: IProductBanner) => {
  const responseInsert = await IProductBannerModel.create(product);
  return responseInsert;
};

const getIProductBanners = async () => {
  const responseItem = await IProductBannerModel.find({});
  return responseItem;
};

const getIProductBanner = async (id: string) => {
  const responseItem = await IProductBannerModel.findOne({ _id: id });
  return responseItem;
};

const updateIProductBanner = async (id: string, data: IProductBanner) => {
  const responseItem = await IProductBannerModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

const deleteIProductBanner = async (id: string) => {
  const responseItem = await IProductBannerModel.remove({ _id: id });
  return responseItem;
};

export { insertIProductBanner, getIProductBanners, getIProductBanner, updateIProductBanner, deleteIProductBanner };
