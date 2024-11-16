import { Schema, Types, model, Model } from "mongoose";
import { AboutUs } from "../interfaces/AboutUs.type";


const AboutUsSchema = new Schema<AboutUs>(
  {
  title: {
      type: String,
    },
subtitle_1: {
  type: String,
  required: true,
},
subtitle_2: {
  type: String,
  required: true,
},
img: {
  type: String,
},
thumb_text: {
type: String,
required: true,
},
year: {
type: Number,
required: true,
}

  },
);

const AboutUsModel = model("AboutUsModel", AboutUsSchema);
export default AboutUsModel;
