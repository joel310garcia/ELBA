import { Schema, Types, model, Model } from "mongoose";
import { ICoupon } from "../interfaces/coupon-type";


const ICouponSchema = new Schema<ICoupon>(
  {
    id : {
      type: String,
    },
title: {
  type: String,
  required: true,
},
logo: {
  type: String,
  required: true,
},
couponCode: {
  type: String,
  required: true,
},
endTime: {
  type: String,
  required: true,
  
},

discountPercentage: {
  type: Number,
  required: true,
},
minimumAmount:{
  type: Number,
  required: true,
},
 productType: {
  type: String,
  required: true,
},
 },
);

const ICouponModel = model("ICouponModel", ICouponSchema);
export default ICouponModel;
