import { Schema, Types, model, Model } from "mongoose";
import { IProductBanner } from "../interfaces/IProductBanner";


 const IProductBannerSchema = new Schema<IProductBanner>(
   {
     id: {
       type: Number,
     },

     banner_bg_txt: {
       type: String,
       required: true,
     },

     subtitle: {
      type: String,
      required: true,
    },
     title: {
       type: String,
       required: true,
     },

     oldPrice: {
       type: Number,
       required: true,
     },

     newPrice: {
      type: Number,
      required: true,
    },

     img: {
      type: String,
      required: true,
    },
   },
 );

 const IProductBannerModel = model("IProductBannerModel", IProductBannerSchema);
 export default IProductBannerModel;
