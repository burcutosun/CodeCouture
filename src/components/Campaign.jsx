export default function Campaign() {
  return (
    <div className="flex flex-col gap-8 justify-end pt-40 lg:flex-row-reverse lg:gap-0 lg:pt-0">
      <div className="w-60 flex flex-col gap-4 items-center mx-auto text-center lg:w-[50%] lg:justify-center lg:items-start lg:px-56 lg:text-start">
        <h5 className="font-bold text-h5 text-muted">SUMMER 2020</h5>
        <h1 className="font-bold text-h2 text-default">
          Part of the Neural Universe
        </h1>
        <h4 className="text-h4 text-second">
          We know how large objects will act, but things on a small scale.
        </h4>
        <div className="flex flex-col gap-4 items-center lg:flex-row">
          <button className="w-36 h-14 bg-primary rounded-md font-bold text-btnText text-white lg:bg-[#2DC071]">
            BUY NOW
          </button>
          <button className="w-36 h-14 bg-white border border-primary rounded-md font-bold text-btnText text-[#23A6F0] lg:text-[#2DC071] lg:border-[#2DC071]">
            Learn More
          </button>
        </div>
      </div>
      <img
        className="mx-auto lg:w-[50%]"
        src=".\assets\campaign\asian-woman-man-with-winter-clothes 1.svg"
        alt=""
      />
    </div>
  );
}
