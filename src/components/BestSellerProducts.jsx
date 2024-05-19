import BestSellerCardItem from "./BestSellerCardItem";

export default function ProductCards() {
  return (
    <div className="flex flex-col max-w-[90rem] mx-auto py-12">
      <h3 className="my-8 font-bold text-center text-h3 text-default lg:text-start">
        BESTSELLER PRODUCTS
      </h3>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
        <BestSellerCardItem />
      </div>
    </div>
  );
}
