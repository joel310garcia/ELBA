import { InstagramAreaOne } from "../interfaces/InstagramAreaOne.type";
import InstagramAreaOneModel from "../models/InstagramAreaOne.models";

const insertInstagramAreaOne= async (brand: InstagramAreaOne) => {
  const responseInsert = await InstagramAreaOneModel.create(brand);
  return responseInsert;
};

const getInstagramAreaOnes = async () => {
  const responseItem = await InstagramAreaOneModel.find({});
  return responseItem;
};

const getInstagramAreaOne = async (id: string) => {
  const responseItem = await InstagramAreaOneModel.findOne({ _id: id });
  return responseItem;
};

const updateInstagramAreaOne = async (id: string, data: InstagramAreaOne) => {
  const responseItem = await InstagramAreaOneModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

const deleteInstagramAreaOne = async (id: string) => {
  const responseItem = await InstagramAreaOneModel.remove({ _id: id });
  return responseItem;
};

export { insertInstagramAreaOne, getInstagramAreaOnes, getInstagramAreaOne, updateInstagramAreaOne, deleteInstagramAreaOne };
