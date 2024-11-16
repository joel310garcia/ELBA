import { Schema, Types, model, Model } from "mongoose";
import { HeroBannerOne } from "../interfaces/HeroBannerOne.type";


const HeroBannerOneSchema = new Schema<HeroBannerOne>({
  id: {
    type: Number,
    required: true, // Ensure an ID is always provided
    unique: true // Ensure each document has a unique ID
  },
  pre_title: {
    text: String,
    price: Number
  },
  title: {
    type: String,
    required: true // Ensure a title is always provided
  },
  subtitle: {
    text_1: String,
    percent: Number,
    text_2: String
  },
  img: {
    type: String,
    required: true // Ensure an image URL is provided
  },
  green_bg: {
    type: Boolean,
    default: false // Set a default value if not provided
  },
  is_light: {
    type: Boolean,
    default: false
  }
});

 const HeroBannerOneModel = model("HeroBannerOneModel", HeroBannerOneSchema);
 export default HeroBannerOneModel;
