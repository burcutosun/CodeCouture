export default function ShopCardItem(props) {
  const { image, index, title } = props;

  let containerClass = "relative ";
  containerClass += index === 3 ? "mb-0" : "mb-6";
  containerClass += index > 1 ? "" : "";

  return (
    <div className={containerClass} key={index}>
      <img className="relative" src={image} alt="" />
      <button className="w-[8.5rem] h-[3rem] absolute bottom-8 left-[30%] bg-white border-none font-bold text-[#252B42]">
        {title}
      </button>
    </div>
  );
}
