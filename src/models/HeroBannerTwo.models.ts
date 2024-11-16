import { Schema, Types, model, Model } from "mongoose";
import { HeroBannerTwo } from "../interfaces/HeroBannerTwo.type";


 const HeroBannerTwoSchema = new Schema<HeroBannerTwo>(
   {
     id: {
       type: Number,
     },

     subtitle: {
       type: String,
       required: true,
     },

     title: {
      type: String,
      required: true,
    },
     img: {
       type: String,
       required: true,
     },
   },
 );

 const HeroBannerTwoModel = model("HeroBannerTwoModel", HeroBannerTwoSchema);
 export default HeroBannerTwoModel;
