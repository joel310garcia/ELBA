import { InstagramAreaTwo } from "../interfaces/InstagramAreaTwo.type";
import InstagramAreaTwoModel from "../models/InstagramAreaTwo.models";

const insertInstagramAreaTwo= async (brand: InstagramAreaTwo) => {
  const responseInsert = await InstagramAreaTwoModel.create(brand);
  return responseInsert;
};

const getInstagramAreaTwos = async () => {
  const responseItem = await InstagramAreaTwoModel.find({});
  return responseItem;
};

const getInstagramAreaTwo = async (id: string) => {
  const responseItem = await InstagramAreaTwoModel.findOne({ _id: id });
  return responseItem;
};

const updateInstagramAreaTwo = async (id: string, data: InstagramAreaTwo) => {
  const responseItem = await InstagramAreaTwoModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

const deleteInstagramAreaTwo = async (id: string) => {
  const responseItem = await InstagramAreaTwoModel.remove({ _id: id });
  return responseItem;
};

export { insertInstagramAreaTwo, getInstagramAreaTwos, getInstagramAreaTwo, updateInstagramAreaTwo, deleteInstagramAreaTwo };
