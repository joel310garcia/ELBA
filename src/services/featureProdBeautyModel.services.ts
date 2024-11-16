import { featureProdBeauty } from "../interfaces/featureProdBeautyModel.type";
import featureProdBeautyModel from "../models/featureProdBeautyModel.models";

const insertfeatureProdBeauty= async (brand: featureProdBeauty) => {
  const responseInsert = await featureProdBeautyModel.create(brand);
  return responseInsert;
};

const getfeatureProdBeautys = async () => {
  const responseItem = await featureProdBeautyModel.find({});
  return responseItem;
};

const getfeatureProdBeauty = async (id: string) => {
  const responseItem = await featureProdBeautyModel.findOne({ _id: id });
  return responseItem;
};

const updatefeatureProdBeauty = async (id: string, data: featureProdBeauty) => {
  const responseItem = await featureProdBeautyModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

const deletefeatureProdBeauty = async (id: string) => {
  const responseItem = await featureProdBeautyModel.remove({ _id: id });
  return responseItem;
};

export { insertfeatureProdBeauty, getfeatureProdBeautys, getfeatureProdBeauty, updatefeatureProdBeauty, deletefeatureProdBeauty };
