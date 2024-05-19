export default function ShopCard(props) {
  const { image, id, title } = props;

  let shopCardStyle = "relative hover:scale-105 ";
  shopCardStyle += id > 1 ? "lg:row-span-1" : "lg:row-span-2";

  return (
    <div className={shopCardStyle}>
      <img className="relative" src={image} alt="" />
      <button className="w-36 h-12 absolute bottom-8 left-[30%] bg-white border-none font-bold text-h5 text-default">
        {title}
      </button>
    </div>
  );
}
