import ProductCardItem from "./ProductCardItem";

export default function ProductCards() {
  const products = [
    {
      image: "./assets/product-cards/product-cover-5.png",
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      productColors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image: "./assets/product-cards/product-cover-5-1.png",
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      productColors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image: "./assets/product-cards/product-cover-5-2.png",
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      productColors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image: "./assets/product-cards/product-cover-5-3.png",
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      productColors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image: "./assets/product-cards/product-cover-5-4.png",
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      productColors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image: "./assets/product-cards/product-cover-5-5.png",
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      productColors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image: "./assets/product-cards/product-cover-5-6.png",
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      productColors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image: "./assets/product-cards/product-cover-5-7.png",
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      productColors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image: "./assets/product-cards/product-cover-5.png",
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      productColors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image: "./assets/product-cards/product-cover-5-1.png",
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      productColors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image: "./assets/product-cards/product-cover-5-2.png",
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      productColors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image: "./assets/product-cards/product-cover-5-3.png",
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      productColors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image: "./assets/product-cards/product-cover-5-4.png",
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      productColors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image: "./assets/product-cards/product-cover-5-5.png",
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      productColors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image: "./assets/product-cards/product-cover-5-6.png",
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      productColors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      image: "./assets/product-cards/product-cover-5-7.png",
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      productColors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
  ];
  const path = window.location.pathname;
  let headerStyle = "w-[18rem] mb-[4rem] text-center";
  if (path !== "/") {
    headerStyle += " hidden";
  }
  return (
    <div className="w-screen flex flex-col items-center py-[6rem] lg:px-[3rem]">
      <div className={headerStyle}>
        <h2 className="text-xl text-[#737373]">Featured Products</h2>
        <h3 className="font-bold text-2xl text-[#252B42]">
          BESTSELLER PRODUCTS
        </h3>
        <p className="text-sm text-[#737373]">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-[3rem] lg:grid-cols-4">
        <ProductCardItem products={products} />
      </div>
    </div>
  );
}
