import { IMenuItem }    from "../interfaces/menu-d-type";


 import  { home_pagesModel} from "../models/IMenuItem.models";


  //////////////////////POST////////////////////////////////////////


  const inserthomepagesModel = async (product: IMenuItem) => {
    const responseInsert = await home_pagesModel.create(product);
    return responseInsert;
  };



//////////////////////GETS/////////////////////////////////////////////


const gethomepagesModels = async () => {
  const responseItem = await home_pagesModel.find({});
  return responseItem;
};


/////////////////////////GET//////////////////////////////////////////////


const gethomepagesModel = async (id: string) => {
  const responseItem = await home_pagesModel.findOne({ _id: id });
  return responseItem;
};

////////////////////////////UPDATE//////////////////////////////////////////////


const updatehomepagesModel = async (id: string, data: IMenuItem) => {
  const responseItem = await home_pagesModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

/////////////////////////////////DELETE/////////////////////////////////////////


const deletehomepagesModel = async (id: string) => {
  const responseItem = await home_pagesModel.remove({ _id: id });
  return responseItem;
};



/////////////////////////////////////////////////////////////////////////////
export  { inserthomepagesModel,
  gethomepagesModels,
  gethomepagesModel,
  updatehomepagesModel,
  deletehomepagesModel };
