import { Schema, Types, model, Model } from "mongoose";
import { IProduct } from "../interfaces/product-type";


const IReviewSchema = new Schema({
  user: {
    type : String,
    require:true
  },
  name: {
    type : String,
    require:true
  },
  email: {
    type : String,
    require:true
  },
  rating: {
    type : Number,
    require:true
  },
  review: {
    type : String,
    require:true
  },
  date: {
    type : Date,
    require:true
  }, // Usamos Date para almacenar fechas correctamente
});
const IProductSchema = new Schema<IProduct>({
  // id: 
  // {
  //   type : String,
  //   require:true
  // },

  sku: String,
  img:  {
    type : String,
    require:true
  },
  title:  {
    type : String,
    require:true
  },
  slug:  {
    type : String,
    require:true
  },
  unit:  {
    type : String,
    require:true
  },
  imageURLs: [{
    color: {
      name: String,
      clrCode: String
    },
    img:  {
      type : String,
      require:true
    },
  }],
  parent:  {
    type : String,
    require:true
  },
  children:  {
    type : String,
    require:true
  },
  price:  {
    type : Number,
    require:true
  },
  discount: {
    type : Number,
    require:true
  },
  quantity: {
    type : Number,
    require:true
  },
  brand: {
    name:  {
      type : String,
      require:true
    },
  },
  category: {
    name:  {
      type : String,
      require:true
    },
  },
  status:  {
    type : String,
    require:true
  },
  reviews:   
 [IReviewSchema], // Array de objetos del tipo reviewSchema
  productType:  {
    type : String,
    require:true
  },
  description:  {
    type : String,
    require:true
  },
  orderQuantity: Number,
  additionalInformation: [{
    key: String,
    value: String
  }],
  featured: Boolean,
  sellCount: Number,
  offerDate: {
    startDate:   
 Date,
    endDate: Date
  },
  tags: [String],
  videoId:  {
    type : String,
    require:true
  },
  sizes: [ String]
});

 const IProductModel = model("IProductModel", IProductSchema);
 export default IProductModel;


// const ItemSchema = new Schema<IProduct>(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     color: {
//       type: String,
//       required: true,
//     },
//     gas: {
//       type: String,
//       enum: ["gasoline", "electric"],
//       required: true,
//     },
//     year: {
//       type: Number,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//     versionKey: false,
//   }
// );

// const ItemModel = model("items", ItemSchema);
// export default ItemModel;



// const ProductSchema = new Schema<Car>(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     color: {
//       type: String,
//       required: true,
//     },
//     gas: {
//       type: String,
//       enum: ["gasoline", "electric"],
//       required: true,
//     },
//     year: {
//       type: Number,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//     versionKey: false,
//   }
// );
