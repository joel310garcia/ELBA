import { Schema, Types, model, Model } from "mongoose";
import { IBrand } from "../interfaces/brand-type";


const IBrandSchema = new Schema<IBrand>(
  {
  id: {
      type: String,
    },
  products: [],
name: {
  type: String,
  required: true,
},
description: {
  type: String,
  required: true,
},
email: {
  type: String,
  required: true,
},
website: {
  type: String,
  required: true,
},

location: {
  type: String,
},

status: {
  type: String,
  required: true,
},
logo: {
  type: String,
  required: true,
},
  },
);

const IBrandModel = model("IBrandModel", IBrandSchema);
export default IBrandModel;
