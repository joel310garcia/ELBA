import { IFeature } from "../interfaces/IFeature.type";
import IFeatureModel from "../models/IFeature.models";

const insertIFeature= async (product: IFeature) => {
  const responseInsert = await IFeatureModel.create(product);
  return responseInsert;
};

const getIFeatures = async () => {
  const responseItem = await IFeatureModel.find({});
  return responseItem;
};

const getIFeature = async (id: string) => {
  const responseItem = await IFeatureModel.findOne({ _id: id });
  return responseItem;
};

const updateIFeature = async (id: string, data: IFeature) => {
  const responseItem = await IFeatureModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

const deleteIFeature = async (id: string) => {
  const responseItem = await IFeatureModel.remove({ _id: id });
  return responseItem;
};

export { 
  insertIFeature,
   getIFeatures,
    getIFeature,
     updateIFeature,
      deleteIFeature };
