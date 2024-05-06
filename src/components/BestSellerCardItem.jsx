import { Link } from "react-router-dom";

export default function ProductCardItem(props) {
  const { products } = props;
  console.log(products[0].image);
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
            <h5 className="font-bold text-h5 text-[#252B42]">
              {product.title}
            </h5>
            <Link to="" className="font-bold text-link text-[#737373]">
              {product.category}
            </Link>
            <div>
              <span className="font-bold text-h5 text-[#BDBDBD] mr-3">
                {product.price}
              </span>
              <span className="font-bold text-h5 text-[#23856D]">
                {product.discountedPrice}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
