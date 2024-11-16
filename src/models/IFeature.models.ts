import { Schema, Types, model, Model } from "mongoose";
import { IFeature } from "../interfaces/IFeature.type";


const IFeatureSchema = new Schema<IFeature>(
  {
    
title: {
  type: String,
  required: true,
},
subtitle: {
  type: String,
}
  },
);

const IFeatureModel = model("IFeatureModel", IFeatureSchema);
export default IFeatureModel;
