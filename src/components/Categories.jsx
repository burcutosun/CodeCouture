export default function Categories() {
  const categoriesShop = [
    {
      image: "./assets/categories/card-cover-5.jpg",
      title: "CLOTHS",
      count: "5 items",
    },
    {
      image: "./assets/categories/card-cover-6.jpg",
      title: "CLOTHS",
      count: "5 items",
    },
    {
      image: "./assets/categories/card-cover-7.jpg",
      title: "CLOTHS",
      count: "5 items",
    },
    {
      image: "./assets/categories/card-cover-8.jpg",
      title: "CLOTHS",
      count: "5 items",
    },
    {
      image: "./assets/categories/card-cover-9.jpg",
      title: "CLOTHS",
      count: "5 items",
    },
  ];

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
