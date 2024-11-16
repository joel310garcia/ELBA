import { IFashionTestimonial } from "../interfaces/testimonial-d-type";
import IFashionTestimonialModel from "../models/testimonial.models";

const insertITestimonial = async (product: IFashionTestimonial) => {
  const responseInsert = await IFashionTestimonialModel.create(product);
  return responseInsert;
};

const getITestimonials = async () => {
  const responseItem = await IFashionTestimonialModel.find({});
  return responseItem;
};

const getITestimonial = async (id: string) => {
  const responseItem = await IFashionTestimonialModel.findOne({ _id: id });
  return responseItem;
};

const updateITestimonial = async (id: string, data: IFashionTestimonial) => {
  const responseItem = await IFashionTestimonialModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

const deleteITestimonial = async (id: string) => {
  const responseItem = await IFashionTestimonialModel.remove({ _id: id });
  return responseItem;
};

export { insertITestimonial, getITestimonials, getITestimonial, updateITestimonial, deleteITestimonial };
