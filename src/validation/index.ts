//**

// import ProductCard from "../components/ProductCard/ProductCard";
export interface IProductValidation {
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
}
interface Ierrors {
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string;
}
export const productValidation = (product: IProductValidation) => {
  const errors: Ierrors = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: "",
  };
  const { description, imageURL, price, title, colors } = product;
  const vaildimgurl = /^(http|ftp|https):\/\/\w/.test(imageURL);
  if (!title.trim() || title.length < 5 || title.length > 80) {
    errors.title = "Product Title Must Be Between 5 and 80 Characters !";
  }
  if (
    !description.trim() ||
    description.length < 10 ||
    description.length > 900
  ) {
    errors.description =
      "Product Title Must Be Between 10 and 900 Characters !";
  }
  if (!imageURL.trim() || !vaildimgurl) {
    errors.imageURL = "Valid image Url is Required !";
  }
  if (!price.trim() || !parseInt(product.price)) {
    errors.price = "Valid Price is Required !";
  }
  if (colors.length === 0) errors.colors = "Must Select at Least One Color !";
  return errors;
};
