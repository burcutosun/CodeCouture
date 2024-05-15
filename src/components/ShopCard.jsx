export default function ShopCard(props) {
  const { image, id, title } = props;

  let shopCardStyle = "relative ";
  shopCardStyle += id > 1 ? "lg:row-span-1" : "lg:row-span-2";

  return (
    <div className={shopCardStyle} key={id}>
      <img className="relative" src={image} alt="" />
      <button className="w-[8.5rem] h-[3rem] absolute bottom-8 left-[30%] bg-white border-none font-bold text-h5 text-[#252B42]">
        {title}
      </button>
    </div>
  );
}
