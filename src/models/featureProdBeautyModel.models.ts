import { Schema, Types, model, Model } from "mongoose";
import { featureProdBeauty } from "../interfaces/featureProdBeautyModel.type";


const featureProdBeautySchema = new Schema<featureProdBeauty>(
  {
  id: {
      type: String,
    },
img: {
  type: String,
  required: true,
},
title: {
  type: String,
  required: true,
},
subtitle: {
  type: String,
  required: true,
},
Save: {
  type: Number,
  required: true,
}
  },
);

const featureProdBeautyModel = model("featureProdBeautyModel", featureProdBeautySchema);
export default featureProdBeautyModel;
