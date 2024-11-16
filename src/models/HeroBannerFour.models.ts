import { Schema, Types, model, Model } from "mongoose";
import { HeroBannerFour } from "../interfaces/HeroBannerFour.type";


 const HeroBannerFourSchema = new Schema<HeroBannerFour>(
   {
    videoSrc: {
       type: String,
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

 const HeroBannerFourModel = model("HeroBannerFourModel", HeroBannerFourSchema);
 export default HeroBannerFourModel;
