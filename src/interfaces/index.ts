// import { ProductNameTypes } from "../types";
export type productName = "title" | "description" | "imageURL" | "price";
export interface IProduct {
  id?: number;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
  name: string;
}

export interface IFormInput {
  id: string;
  name: productName;
  label: string;
  type: string;
}

export interface ICategory {
  id: string;
  name: string;
  imageURL: string;
}
