import { useContext } from "react";
import ProductCard from "./ProductCard";
import { DataContext } from "../context/DataContext";

export default function Products() {
  const data = useContext(DataContext);
  const { products } = data;

  const path = window.location.pathname;
  let headerStyle = "w-[18rem] mb-[4rem] text-center";

  if (path !== "/") {
    headerStyle += " hidden";
  }

  return (
    <div className="flex flex-col items-center py-12 lg:px-12">
      <div className={headerStyle}>
        <h2 className="text-h4 text-[#737373]">Featured Products</h2>
        <h3 className="font-bold text-h3 text-[#252B42]">
          BESTSELLER PRODUCTS
        </h3>
        <p className="text-paragraph text-[#737373]">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-[3rem] lg:grid-cols-4">
        <ProductCard products={products} />
      </div>
    </div>
  );
}
