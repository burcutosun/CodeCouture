export default function Footer() {
  return (
    <div className="w-screen h-[84rem] lg:h-[30.5rem]">
      <div className="h-[11rem] bg-[#FAFAFA] flex flex-col gap-5 items-center p-[3rem] lg:h-[9rem] lg:flex-row lg:justify-between lg:px-[4rem]">
        <h3 className="font-bold text-2xl text-[#252B42]">CodeCouture</h3>
        <div className="flex gap-4 items-center">
          <a className="">
            <img src=".\assets\footer\Vector.svg" alt="" />
          </a>
          <a className="">
            <img src=".\assets\footer\Vector-1.svg" alt="" />
          </a>
          <a className="">
            <img src=".\assets\footer\Vector-2.svg" alt="" />
          </a>
        </div>
      </div>
      <div className="w-[30rem] h-[67rem] gap-6 grid grid-rows-4 p-[3rem] lg:w-[90rem] lg:h-[17rem] lg:grid-cols-[15%_15%_15%_15%_40%] lg:mx-auto">
        <div className="flex flex-col justify-between gap-4">
          <h5 className="font-bold text-[#252B42] mb-2">Company Info</h5>
          <a className="font-bold leading-[1.5rem] text-[#737373]" href="">
            About Us
          </a>
          <a className="font-bold leading-[1.5rem] text-[#737373]" href="">
            Carrier
          </a>
          <a className="font-bold leading-[1.5rem] text-[#737373]" href="">
            We are hiring
          </a>
          <a className="font-bold leading-[1.5rem] text-[#737373]" href="">
            Blog
          </a>
        </div>
        <div className=" flex flex-col justify-between gap-4">
          <h5 className="font-bold text-[#252B42] mb-2">Legal</h5>
          <a className="font-bold leading-[1.5rem] text-[#737373]" href="">
            About Us
          </a>
          <a className="font-bold leading-[1.5rem] text-[#737373]" href="">
            Carrier
          </a>
          <a className="font-bold leading-[1.5rem] text-[#737373]" href="">
            We are hiring
          </a>
          <a className="font-bold leading-[1.5rem] text-[#737373]" href="">
            Blog
          </a>
        </div>
        <div className=" flex flex-col justify-between gap-4">
          <h5 className="font-bold text-[#252B42] mb-2">Features</h5>
          <a className="font-bold leading-[1.5rem] text-[#737373]" href="">
            Business Marketing
          </a>
          <a className="font-bold leading-[1.5rem] text-[#737373]" href="">
            User Analytic
          </a>
          <a className="font-bold leading-[1.5rem] text-[#737373]" href="">
            Live Chat
          </a>
          <a className="font-bold leading-[1.5rem] text-[#737373]" href="">
            Unlimited Support
          </a>
        </div>
        <div className=" flex flex-col justify-between gap-4">
          <h5 className="font-bold text-[#252B42] mb-2">Resources</h5>
          <a className="font-bold leading-[1.5rem] text-[#737373]" href="">
            IOS & Android
          </a>
          <a className="font-bold leading-[1.5rem] text-[#737373]" href="">
            Watch a Demo
          </a>
          <a className="font-bold leading-[1.5rem] text-[#737373]" href="">
            Customers
          </a>
          <a className="font-bold leading-[1.5rem] text-[#737373]" href="">
            API
          </a>
        </div>
        <div className=" flex flex-col justify-between gap-4">
          <h5 className="font-bold text-[#252B42] mb-2">Get In Touch</h5>
          <div className="border flex">
            <input
              className="w-[70%] h-[3.5rem] bg-[#F9F9F9] border border-[#E6E6E6] rounded-[0.3rem] leading-[1.75rem] text-sm text-[#737373] pl-[1rem]"
              placeholder="Your Email"
            />
            <button className="w-[30%] h-[3.5rem] bg-[#23A6F0] border border-[#E6E6E6] rounded-[0.3rem] leading-[1.75rem] text-sm text-white">
              Subscribe
            </button>
          </div>
          <p className="leading-[1.75rem] text-sm text-[#737373]">
            Lore imp sum dolor Amit
          </p>
        </div>
      </div>
      <div className="h-[8rem] bg-[#FAFAFA] flex items-center justify-center">
        <p className="w-[14rem] font-bold leading-[1.5rem] text-center text-[#737373]">
          Made With Love By Finland All Right Reserved
        </p>
      </div>
    </div>
  );
}
