import { useState } from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import { productList } from "./data";
import { IProduct } from "./interfaces";

function App() {
  // ** States

  const [products, setProductList] = useState<IProduct[]>(productList);

  //

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/products")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       // Normalize MongoDB `_id` to `id` for frontend usage
  //       const normalized = data.map((p: IProduct) => ({
  //         ...p,
  //         id: p.id,
  //       }));
  //       setProductList(normalized);
  //       console.log(data);
  //     });
  // }, []);

  //

  // ** States

  const rederProductList = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <div className="grid gap-2 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 p-4">
      {rederProductList}
    </div>
  );
}

export default App;
