export default function AboutUs() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-5 items-center">
        <h2 className="font-bold text-h2 text-default">ABOUT US</h2>
        <h4 className="text-h4 text-second">
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </h4>
        <button className="w-48 h-12 bg-primary rounded-[5px] font-bold text-btnText text-white">
          Get Quote Now
        </button>
      </div>
      <img className="max-w-[40rem]" src=".\assets\about-us\none.png" alt="" />
    </div>
  );
}
