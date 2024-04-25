export default function Campaign() {
  return (
    <div className="w-screen h-[65rem] flex flex-col gap-8 justify-end lg:h-[43rem] lg:flex-row-reverse lg:gap-0">
      <div className="w-[15rem] flex flex-col gap-4 items-center mx-auto text-center lg:w-[50%] lg:justify-center lg:items-start lg:p-[5rem]">
        <h5 className="font-bold text-[#BDBDBD]">SUMMER 2020</h5>
        <h1 className="font-bold leading-[3.125rem] text-[2.5rem] text-[#252B42]">
          Part of the Neural Universe
        </h1>
        <h4 className="leading-[1.875rem] text-[1.25rem] text-[#737373]">
          We know how large objects will act, but things on a small scale.
        </h4>
        <div className="flex flex-col gap-4 items-center lg:flex-row">
          <button className="w-[9.5rem] h-[3.25rem] font-bold text-sm text-white bg-[#23A6F0] rounded-[0.6rem] p-[1rem, 2.5rem] lg:bg-[#2DC071]">
            BUY NOW
          </button>
          <button className="w-[9.5rem] h-[3.25rem] font-bold text-sm text-[#23A6F0] bg-white border border-[#23A6F0] rounded-[0.6rem] p-[1rem, 2.5rem] lg:text-[#2DC071] lg:border-[#2DC071]">
            Learn More
          </button>
        </div>
      </div>
      <img
        className="w-[29rem] mx-auto lg:w-[50%]"
        src=".\assets\campaign\asian-woman-man-with-winter-clothes 1.svg"
        alt=""
      />
    </div>
  );
}
