import { Schema, Types, model, Model } from "mongoose";
import { IMenuItem, IMobileType } from "../interfaces/menu-d-type";

const home_pagesSchema = new Schema<IMenuItem>({
  id: {
    type: Number,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
  },
  mega_menu: {
    type: Boolean,
  },
  drop_down: {
    type: Boolean,
  },
  home_pages: [{
    id: Number, 
    title: String,
    img: String,
    link: String,
  }]  ,
  shop_mega_menus: [{
    link: String,
    title: String,
    list_menus: [{
      title: String,
      link: String
    }]
  }],
  product_menus: [{
    id: Number,
    title: String,
    link: String,
    dropdown_menus: [{
      title: String,
      link: String
    }]
  }],
  dropdown_menus: [{
    title: String,
    link: String
  }]

});

const shop_mega_menusSchemas = new Schema<IMenuItem>({
  id: {
    type: Number,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
  },
  mega_menu: {
    type: Boolean,
  },
  drop_down: {
    type: Boolean,
  },
  shop_mega_menus: [{
    link: String,
    title: String,
    list_menus: [{
      title: String,
      link: String
    }]
  }],
});


const product_menusSchemas = new Schema<IMenuItem>({
  id: {
    type: Number,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
  },
  mega_menu: {
    type: Boolean,
  },
  drop_down: {
    type: Boolean,
  },
  product_menus: [{
    id: Number,
    title: String,
    link: String,
    dropdown_menus: [{
      title: String,
      link: String
    }]
  }],
});

const dropdown_menusShema = new Schema<IMenuItem>({
  id: {
    type: Number,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
  },
  mega_menu: {
    type: Boolean,
  },
  drop_down: {
    type: Boolean,
  },
  dropdown_menus: [{
    title: String,
    link: String
  }]
});

const IMobileTypeSchema = new Schema<IMobileType>({
  id: {
    type: Number,
  },
  homes: {
    type: Boolean,
  },
  sub_menu: {
    type: Boolean,
  },
  single_link: {
    type: Boolean,
  },
  title: {
    type: String,
  },
  link: {
    type: String,
  },
  home_pages: [{
    id: Number,
    title: String,
    img: String,
    link: String
  }],
  sub_menus: [{
    title: String,
    link: String
  }]
});

const home_pagesModel = model('home_pagesModel', home_pagesSchema);




const IMobileTypeModel = model('IMobileTypeModel', IMobileTypeSchema);

export  { home_pagesModel, IMobileTypeModel };