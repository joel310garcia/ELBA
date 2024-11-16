import { Schema, Types, model, Model } from "mongoose";
import { InstagramAreaOne } from "../interfaces/InstagramAreaOne.type";


const InstagramAreaOneSchema = new Schema<InstagramAreaOne>(
  {
  id: {
      type: String,
    },
    id_home: {
      type: Number,
    },
link: {
  type: String,
  required: true,
},
img: {
  type: String,
  required: true,
}
  },
);

const InstagramAreaOneModel = model("InstagramAreaOneModel", InstagramAreaOneSchema);
export default InstagramAreaOneModel;
