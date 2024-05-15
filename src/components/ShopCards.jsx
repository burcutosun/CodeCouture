import { useContext } from "react";
import ShopCard from "./ShopCard";
import { DataContext } from "../context/DataContext";

export default function ShopCards() {
  const data = useContext(DataContext);
  const { categoriesHome } = data;

  return (
    <div className="w-screen bg-[#FAFAFA] flex flex-col items-center py-[6rem] lg:px-[3rem]">
      <div className="w-[18rem] mb-[4rem] text-center">
        <h2 className="font-bold text-h3 text-[#252B42]">EDITOR'S PICK</h2>
        <p className="text-paragraph text-[#737373]">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-2">
        {categoriesHome.map((category, index) => {
          return (
            <ShopCard
              image={category.image}
              id={index}
              title={category.title}
            />
          );
        })}
      </div>
    </div>
  );
}
