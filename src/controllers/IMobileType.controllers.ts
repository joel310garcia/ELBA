import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import {insertIMobile, getIMobiles, getIMobile, updateIMobile, deleteIMobile 
} from "../services/IMobileType.services";
import { handleHttp } from "../utils/error.handle";

//////////////////////////////////INSERT////////////////////////////////////////////



const postMobile = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertIMobile(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_MenuItem", e);
    res.status(500).json({ error: "Internal Server Error" });
    
  }
};


/////////////////////////////////GETS//////////////////////////////////////////////


const getMobiles = async (req: Request, res: Response) => {
  try {
    const response = await getIMobiles();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_MenuItems");
    res.status(500).json({ error: "Internal Server Error" });
  }
};
/////////////////////////////////////GET/////////////////////////////////////////



const getMobile = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getIMobile(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_MenuItem");
    res.status(500).json({ error: "Internal Server Error" });
  }
};
//////////////////////////////////////UPDATE//////////////////////////////////////////


const updateMobile = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateIMobile(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_MenuItem");
    res.status(500).json({ error: "Internal Server Error" });
  }
};
////////////////////////////////////////DELETE/////////////////////////////////////////


const deleteIMobileI = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteIMobile(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_MenuItem");
    res.status(500).json({ error: "Internal Server Error" });
  }
};

////////////////////////////////////////////////////////////////////////////////
export { postMobile,
  getMobiles,
  getMobile,
  updateMobile,
  deleteIMobileI
   };
