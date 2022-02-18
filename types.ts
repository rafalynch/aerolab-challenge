export interface Product {
  _id: string;
  name: string;
  cost: number;
  category: string;
  img: {
    url: string;
    hdUrl: string;
  };
}

export interface User {
  id: string;
  name: string;
  points: number;
  redeemHistory: [];
  createDate: string;
}