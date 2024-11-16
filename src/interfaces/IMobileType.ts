export interface IMobileType {
    _id : string
    id: number;
    homes?: boolean;
    sub_menu?: boolean;
    single_link?: boolean;
    title: string;
    link: string;
    home_pages?: {
      id: number;
      title: string;
      img: string;
      link: string;
    }[];
    sub_menus?: {
      title: string;
      link: string;
    }[];
  }