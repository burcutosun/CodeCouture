import { useContext } from "react";
import ProductCardItem from "./ProductCardItem";
import { DataContext } from "../context/DataContext";

export default function ProductCards() {
  const data = useContext(DataContext);
  const { products } = data;

  const path = window.location.pathname;
  let headerStyle = "w-[18rem] mb-[4rem] text-center";
  if (path !== "/") {
    headerStyle += " hidden";
  }
  return (
    <div className="w-screen flex flex-col items-center py-[3rem] lg:px-[3rem]">
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
        <ProductCardItem products={products} />
      </div>
    </div>
  );
}
