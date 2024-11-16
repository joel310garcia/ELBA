import { Schema, Types, model, Model } from "mongoose";
import { InstagramAreaTwo } from "../interfaces/InstagramAreaTwo.type";


const InstagramAreaTwoSchema = new Schema<InstagramAreaTwo>(
  {
  id: {
      type: String,
    },
link: {
  type: String,
  required: true,
},
img: {
  type: String,
  required: true,
},
banner: {
  type: Boolean
}
  },
);

const InstagramAreaTwoModel = model("InstagramAreaTwoModel", InstagramAreaTwoSchema);
export default InstagramAreaTwoModel;
