import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import BestSellerCardItem from "./BestSellerCardItem";

export default function ProductCards() {
  const data = useContext(DataContext);
  const { products } = data;

  return (
    <div className="w-screen flex flex-col max-w-[90rem] mx-auto py-[3rem]">
      <h3 className="my-8 font-bold text-center text-h3 text-default lg:text-start">
        BESTSELLER PRODUCTS
      </h3>
      <div className="grid grid-cols-1 gap-[3rem] lg:grid-cols-4">
        <BestSellerCardItem products={products} />
      </div>
    </div>
  );
}
