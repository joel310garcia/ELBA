import { Schema, Types, model, Model } from "mongoose";
import { IFashionTestimonial } from "../interfaces/testimonial-d-type";


const IFashionTestimonialSchema = new Schema<IFashionTestimonial>(
  {
    id:  {
      type : Number,
    },
    review:  {
      type : Number,
      require:true
    },
    desc:  {
      type : String,
      require:true
    },
    user:  {
      type : String,
      require:true
    },
    name:  {
      type : String,
      require:true
    },
    designation:  {
      type : String,
      require:true
    },
    
  },
);

const IFashionTestimonialModel = model("IFashionTestimonialModel", IFashionTestimonialSchema);
export default IFashionTestimonialModel;
