import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import {inserthomepagesModel,
  gethomepagesModels,
  gethomepagesModel,
  updatehomepagesModel,
  deletehomepagesModel
} from "../services/IMenuItem.services";
import { handleHttp } from "../utils/error.handle";

//////////////////////////////////INSERT////////////////////////////////////////////


const posthome_pagesModel = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await inserthomepagesModel(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_MenuItem", e);
  }
};


/////////////////////////////////GETS//////////////////////////////////////////////


const getgethome_pagesModels = async (req: Request, res: Response) => {
  try {
    const response = await gethomepagesModels();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_MenuItems");
  }
};
/////////////////////////////////////GET/////////////////////////////////////////


const gethome_pagesModelI = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await gethomepagesModel(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_MenuItem");
  }
};

//////////////////////////////////////UPDATE//////////////////////////////////////////

const updatehome_pagesModelI = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updatehomepagesModel(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_MenuItem");
  }
};
////////////////////////////////////////DELETE/////////////////////////////////////////


const deletehome_pagesModelI = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deletehomepagesModel(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_MenuItem");
  }
};


////////////////////////////////////////////////////////////////////////////////
export { 
  posthome_pagesModel,
  getgethome_pagesModels,
  gethome_pagesModelI,
  updatehome_pagesModelI,
  deletehome_pagesModelI, };
