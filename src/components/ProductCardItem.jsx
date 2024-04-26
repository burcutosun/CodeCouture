export default function ProductCardItem(props) {
  const { products } = props;
  return (
    <>
      {products.map((product, index) => (
        <div key={index}>
          <img src={product.image} alt="" />
          <div className="flex flex-col gap-3 items-center justify-evenly p-4">
            <h5 className="font-bold text-[#252B42]">{product.title}</h5>
            <a className="font-bold text-sm text-[#737373]">
              {product.category}
            </a>
            <div>
              <span className="font-bold text-[#BDBDBD] mr-3">
                {product.price}
              </span>
              <span className="font-bold text-[#23856D]">
                {product.discountedPrice}
              </span>
            </div>
            <div className="flex gap-1.5">
              {product.productColors.map((item, index) => (
                <span
                  key={index}
                  className={`w-6 h-6 bg-[${item}] rounded-full`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
