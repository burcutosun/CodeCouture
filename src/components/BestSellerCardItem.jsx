import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

export default function ProductCardItem() {
  const data = useContext(DataContext);
  const { products } = data;

  return (
    <>
      {products.map((product, index) => (
        <Link
          className="hover:scale-105"
          key={index}
          to={`/productdetail/${product.id}`}
        >
          <img src={product.image} alt="" />
          <div className="flex flex-col gap-3 items-center justify-evenly p-4">
            <h5 className="font-bold text-h5 text-default">{product.title}</h5>
            <span className="font-bold text-link text-second">
              {product.category}
            </span>
            <div>
              <span className="font-bold text-h5 text-muted mr-3">
                {product.price}
              </span>
              <span className="font-bold text-h5 text-secondary-1">
                {product.discountedPrice}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
