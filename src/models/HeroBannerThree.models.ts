import { Schema, Types, model, Model } from "mongoose";
import { HeroBannerThree } from "../interfaces/HeroBannerThree.type";


 const HeroBannerThreeSchema = new Schema<HeroBannerThree>(
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
    bg: {
       type: String,
       required: true,
     },
   },
 );

 const HeroBannerThreeModel = model("HeroBannerThreeModel", HeroBannerThreeSchema);
 export default HeroBannerThreeModel;
