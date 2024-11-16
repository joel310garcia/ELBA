import { Schema, Types, model, Model } from "mongoose";
import { ISliderConfig, ISliderData } from "../interfaces/slider-type";


const ISliderConfigSchema = new Schema<ISliderConfig>(
  {
    loop: Boolean,
    nav: Boolean,
    dots: Boolean,
    margin: Number,
    navClass: [String],
    navText: [String],
    responsive: {
      0: {
        items: Number
      },
      576: {
        items: Number
      },
      768: {
        items: Number
      },
      992: {
        items: Number
      },
      1200: {
        items: Number
      }
    }
  },
);

const ISliderDataSchema = new Schema<ISliderData>(
  
  {
    id:  {
      type : Number,
    },
    pre_title: [{
      text: String,
      price: Number
    }],
    title:  {
      type : String,
      require:true
    },
    subtitle: [{
      text_1: String,
      percent: Number,
      text_2: String
    }],
    img:  {
      type : String,
      require:true
    },
    green_bg:  {
      type : Boolean,
    },
    is_light:  {
      type : Boolean,
    },
    
  },
);

const ISliderConfigModel = model("ISliderConfigModel", ISliderConfigSchema);

const ISliderDataModel = model('ISliderDataModel', ISliderDataSchema);

export default { ISliderConfigModel, ISliderDataModel };



