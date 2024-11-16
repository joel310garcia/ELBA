import { Schema, Types, model, Model } from "mongoose";
import { Storage } from "../interfaces/storage";

const StorageSchema = new Schema<Storage>(
  {    
    fileName: {
      type: String,
    },
    idUser: {
      type: String,
    },
    path: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const StorageModel = model("StorageModel", StorageSchema);
export default StorageModel;


