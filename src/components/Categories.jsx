import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Categories() {
  const data = useContext(DataContext);
  const { categoriesShop } = data;

  return (
    <div className="bg-[#FAFAFA] flex flex-col gap-8 items-center p-[5rem] pt-0 lg:flex-row lg:py-8">
      {categoriesShop.map((item, index) => {
        return (
          <div className="relative font-bold text-white">
            <img key={index} className="relative" src={item.image} alt="" />
            <p className="w-full absolute top-[40%] text-center">
              {item.title}
            </p>
            <p className="w-full absolute top-[65%] text-center text-sm">
              {item.count}
            </p>
          </div>
        );
      })}
    </div>
  );
}
