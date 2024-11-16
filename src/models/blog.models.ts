import { Schema, Types, model, Model } from "mongoose";
import { IBlogType } from "../interfaces/blog-type";


const IBlogTypeSchema = new Schema<IBlogType>(
  {
    id : {
      type: Number,
    },
img: {
  type: String,
},
list_img: {
  type: String,
},
date: {
  type: String,
  required: true,
},
author: {
  type: String,
  required: true,
},
title: {
  type: String,
  required: true,
},

tags: [],

category: {
  type: String,
  required: true,
},
comments: {
  type: Number,
  required: true,
},
sm_desc: {
  type: String,
},
blog: {
  type: String,
  required: true,
},
slider: {
  type: Boolean,
},
audio: {
  type: Boolean,
},
video: {
  type: Boolean,
},
slider_images: [],
desc: {
  type: String,
},
audio_id: {
  type: String,
},
video_id: {
  type: String,
},
blockquote : {
  type: Boolean,
},
  },
);

const IBlogTypeModel = model("IBlogTypeModel", IBlogTypeSchema);
export default IBlogTypeModel;
