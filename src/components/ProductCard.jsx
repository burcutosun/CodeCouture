import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { products } = props;

  return (
    <>
      {products.map((product, index) => (
        <Link
          className="shadow-md hover:scale-105"
          key={index}
          to={`/productdetail/${product.id}`}
        >
          <img src={product.image} alt="" />
          <div className="flex flex-col gap-3 items-center justify-evenly p-4">
            <h5 className="font-bold text-h5 text-[#252B42]">
              {product.title}
            </h5>
            <span className="font-bold text-link text-[#737373]">
              {product.category}
            </span>
            <div>
              <span className="font-bold text-h5 text-[#BDBDBD] mr-3">
                {product.price}
              </span>
              <span className="font-bold text-h5 text-[#23856D]">
                {product.discountedPrice}
              </span>
            </div>
            <div className="flex gap-1.5">
              {product.productColors.map((item, index) => (
                <span
                  key={index}
                  className={`w-6 h-6 rounded-full`}
                  style={{ backgroundColor: `${item}` }}
                ></span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
