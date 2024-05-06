export default function Campaign() {
  return (
    <div className="w-screen flex flex-col gap-8 justify-end pt-[10rem] lg: lg:flex-row-reverse lg:gap-0 lg:pt-0">
      <div className="w-[15rem] flex flex-col gap-4 items-center mx-auto text-center lg:w-[50%] lg:justify-center lg:items-start lg:p-[5rem]">
        <h5 className="font-bold text-h5 text-[#BDBDBD]">SUMMER 2020</h5>
        <h1 className="font-bold text-h2 text-[#252B42]">
          Part of the Neural Universe
        </h1>
        <h4 className="text-h4 text-[#737373]">
          We know how large objects will act, but things on a small scale.
        </h4>
        <div className="flex flex-col gap-4 items-center lg:flex-row">
          <button className="w-[9.5rem] h-[3.25rem] bg-[#23A6F0] p-[1rem, 2.5rem] rounded-[0.6rem] font-bold text-btnText text-white lg:bg-[#2DC071]">
            BUY NOW
          </button>
          <button className="w-[9.5rem] h-[3.25rem] bg-white border border-[#23A6F0] p-[1rem, 2.5rem] rounded-[0.6rem] font-bold text-btnText text-[#23A6F0] lg:text-[#2DC071] lg:border-[#2DC071]">
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
