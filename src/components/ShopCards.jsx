import { useContext } from "react";
import ShopCard from "./ShopCard";
import { DataContext } from "../context/DataContext";

export default function ShopCards() {
  const data = useContext(DataContext);
  const { categoriesHome } = data;

  return (
    <div className="w-screen bg-[#FAFAFA] flex flex-col items-center pb-28 pt-24 lg:px-12">
      <div className="w-56 mb-16 text-center">
        <h2 className="font-bold text-h3 text-default">EDITOR'S PICK</h2>
        <p className="text-paragraph text-second">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-2">
        {categoriesHome.map((category, index) => {
          return (
            <ShopCard
              image={category.image}
              key={index}
              title={category.title}
            />
          );
        })}
      </div>
    </div>
  );
}
