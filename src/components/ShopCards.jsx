import ShopCardItem from "./ShopCardItem";

export default function ShopCards() {
  const categories = [
    {
      title: "MEN",
      image: "./assets/shop-cards/filter.png",
    },
    {
      title: "WOMEN",
      image: "./assets/shop-cards/filter (1).png",
    },
    {
      title: "ACCESSORIES",
      image: "./assets/shop-cards/filter (2).png",
    },
    {
      title: "KIDS",
      image: "./assets/shop-cards/filter (3).png",
    },
  ];
  return (
    <div className="w-screen h-[115rem] bg-[#FAFAFA] flex flex-col items-center lg:h-[50rem]">
      <div className="w-[18rem] my-[3rem] text-center">
        <h2 className="font-bold text-2xl text-[#252B42]">EDITOR'S PICK</h2>
        <p className="text-sm text-[#737373]">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {categories.map((category, index) => {
          return (
            <ShopCardItem
              image={category.image}
              index={index}
              title={category.title}
            />
          );
        })}
      </div>
    </div>
  );
}
