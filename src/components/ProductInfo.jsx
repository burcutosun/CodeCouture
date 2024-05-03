import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Carousel from "./Carousel";

export default function ProductInfo(props) {
  const data = useContext(DataContext);
  const { products } = data;
  const { id } = props;

  let selected = null;

  for (const product of products) {
    if (product.id === id) {
      selected = product;
      break;
    }
  }

  if (!selected) {
    return <div className="text-center">Ürün bulunamadı.</div>;
  }
  return (
    <>
      <div className="bg-[#FAFAFA] p-[4rem]">
        <Carousel detailImages={selected.detailImages} />
        <div className="flex gap-4 py-10">
          {selected.detailImages.map((item, index) => (
            <img className="w-[6.25rem]" key={index} src={item} alt="" />
          ))}
        </div>
      </div>
    </>
  );
}
