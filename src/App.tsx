// import { useState } from "react";
import ProductCard from "./components/UI/ProductCard";
import { productList } from "./data";
// import { IProduct } from "./interfaces";

function App() {
  // const [products, setProductList] = useState<IProduct[]>(productList);

  const rederProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <div className="grid gap-2 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 p-4">
      {rederProductList}
    </div>
  );
}

export default App;
