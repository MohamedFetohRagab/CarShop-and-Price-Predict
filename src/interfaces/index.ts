export type productName = "title" | "description" | "imageURL" | "price";
export interface IProduct {
  id: number;
  carBrand: string;
  carModel: string;
  year: number;
  fuelType: string;
  transmission: string;
  sellingType: string;
  imageURL: string;

  price: number;
  description: string;
  ownerId: string;
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
