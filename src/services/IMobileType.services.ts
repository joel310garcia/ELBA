import { IMobileType }    from "../interfaces/IMobileType";


 import  {IMobileTypeModel } from "../models/IMenuItem.models";


  //////////////////////POST////////////////////////////////////////

const insertIMobile = async (product: IMobileType) => {
  const responseInsert = await IMobileTypeModel.create(product);
  return responseInsert;
};


//////////////////////GETS/////////////////////////////////////////////

const getIMobiles = async () => {
  const responseItem = await IMobileTypeModel.find({});
  return responseItem;
};


/////////////////////////GET//////////////////////////////////////////////

const getIMobile = async (id: string) => {
  const responseItem = await IMobileTypeModel.findOne({ _id: id });
  return responseItem;
};


////////////////////////////UPDATE//////////////////////////////////////////////

const updateIMobile = async (id: string, data: IMobileType) => {
  const responseItem = await IMobileTypeModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};


/////////////////////////////////DELETE/////////////////////////////////////////



const deleteIMobile = async (id: string) => {
  const responseItem = await IMobileTypeModel.remove({ _id: id });
  return responseItem;
};


/////////////////////////////////////////////////////////////////////////////
export  { insertIMobile, getIMobiles, getIMobile, updateIMobile, deleteIMobile };
