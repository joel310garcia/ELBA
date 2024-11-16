import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import {
  insertITestimonial,
  getITestimonials,
  getITestimonial,
  updateITestimonial,
  deleteITestimonial,
} from "../services/testimonial.services";
import { handleHttp } from "../utils/error.handle";

const postTestimonial = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertITestimonial(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_testimonial", e);
  }
};


const getTestimonials = async (req: Request, res: Response) => {
  try {
    const response = await getITestimonials();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_testimonials");
  }
};

const getTestimonial = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getITestimonial(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_testimonial");
  }
};



const updateTestimonial = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateITestimonial(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_testimonial");
  }
};


const deleteTestimonial = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteITestimonial(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_testimonial");
  }
};

export { postTestimonial, getTestimonials, getTestimonial, updateTestimonial, deleteTestimonial };
