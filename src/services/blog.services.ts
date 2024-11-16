import { IBlogType } from "../interfaces/blog-type";
import IBlogTypeModel from "../models/blog.models";

const insertIBlog = async (product: IBlogType) => {
  const responseInsert = await IBlogTypeModel.create(product);
  return responseInsert;
};

const getIBlogs = async () => {
  const responseItem = await IBlogTypeModel.find({});
  return responseItem;
};

const getIBlog = async (id: string) => {
  const responseItem = await IBlogTypeModel.findOne({ _id: id });
  return responseItem;
};

const updateIBlog = async (id: string, data: IBlogType) => {
  const responseItem = await IBlogTypeModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

const deleteIBlog = async (id: string) => {
  const responseItem = await IBlogTypeModel.remove({ _id: id });
  return responseItem;
};

export { insertIBlog, getIBlogs, getIBlog, updateIBlog, deleteIBlog };
