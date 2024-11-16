import { Schema, Types, model, Model } from "mongoose";
import { ICategory } from "../interfaces/category-type";


 const ICategorySchema = new Schema<ICategory>(
   {
     id: {
       type: String,
     },
     img: {
       type: String,
     },
     children: [],
     parent: {
       type: String,
       required: true,
     },
     productType: {
       type: String,
       required: true,
     },
     products: [],
     status: {
      type: String,
      required: true,
    },
   },
 );

 const ICategorytModel = model("ICategorytModel", ICategorySchema);
 export default ICategorytModel;
