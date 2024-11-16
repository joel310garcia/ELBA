
export interface HeroBannerOne {
  id: number;
  title: string;
  subtitle: {
    text_1: string;
    percent: number;
    text_2: string;
  };
  img: string;
  pre_title : {
    text: string
    price: Number
  };
  green_bg : boolean;
  is_light :boolean;
}

