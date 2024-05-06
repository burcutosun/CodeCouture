import { Link } from "react-router-dom";

export default function Footer() {
  const path = window.location.pathname;
  return (
    <div className="w-screen">
      <div
        className={`flex flex-col gap-5 items-start p-[3rem] lg:flex-row lg:justify-between lg:px-[4rem] ${
          path === "" ? "bg-[#FAFAFA]" : "bg-white"
        }`}
      >
        <h3 className="font-bold text-h3 text-[#252B42]">CodeCouture</h3>
        <div className="flex gap-4 items-center">
          <Link to="" className="">
            <img src=".\assets\footer\Vector.svg" alt="" />
          </Link>
          <Link to="" className="">
            <img src=".\assets\footer\Vector-1.svg" alt="" />
          </Link>
          <Link to="" className="">
            <img src=".\assets\footer\Vector-2.svg" alt="" />
          </Link>
        </div>
      </div>
      <div className="w-full grid grid-rows-4 gap-6 px-[3rem] py-[5rem] lg:grid-rows-1 lg:grid-cols-[15%_15%_15%_15%_34%] lg:px-[8rem]">
        <div className="flex flex-col justify-between gap-4">
          <h5 className="font-bold text-h5 text-[#252B42]">Company Info</h5>
          <Link to="" className="font-bold text-link text-[#737373]" href="">
            About Us
          </Link>
          <Link to="" className="font-bold text-link text-[#737373]" href="">
            Carrier
          </Link>
          <Link to="" className="font-bold text-link text-[#737373]" href="">
            We are hiring
          </Link>
          <Link to="" className="font-bold text-link text-[#737373]" href="">
            Blog
          </Link>
        </div>
        <div className=" flex flex-col justify-between gap-4">
          <h5 className="font-bold text-h5 text-[#252B42]">Legal</h5>
          <Link to="" className="font-bold text-link text-[#737373]" href="">
            About Us
          </Link>
          <Link to="" className="font-bold text-link text-[#737373]" href="">
            Carrier
          </Link>
          <Link to="" className="font-bold text-link text-[#737373]" href="">
            We are hiring
          </Link>
          <Link to="" className="font-bold text-link text-[#737373]" href="">
            Blog
          </Link>
        </div>
        <div className=" flex flex-col justify-between gap-4">
          <h5 className="font-bold text-h5 text-[#252B42]">Features</h5>
          <Link to="" className="font-bold text-link text-[#737373]" href="">
            Business Marketing
          </Link>
          <Link to="" className="font-bold text-link text-[#737373]" href="">
            User Analytic
          </Link>
          <Link to="" className="font-bold text-link text-[#737373]" href="">
            Live Chat
          </Link>
          <Link to="" className="font-bold text-link text-[#737373]" href="">
            Unlimited Support
          </Link>
        </div>
        <div className=" flex flex-col justify-between gap-4">
          <h5 className="font-bold text-h5 text-[#252B42]">Resources</h5>
          <Link to="" className="font-bold text-link text-[#737373]" href="">
            IOS & Android
          </Link>
          <Link to="" className="font-bold text-link text-[#737373]" href="">
            Watch a Demo
          </Link>
          <Link to="" className="font-bold text-link text-[#737373]" href="">
            Customers
          </Link>
          <Link to="" className="font-bold text-link text-[#737373]" href="">
            API
          </Link>
        </div>
        <div className=" flex flex-col justify-between gap-4">
          <h5 className="font-bold text-h5 text-[#252B42]">Get In Touch</h5>
          <div className="w-full border flex">
            <input
              className="w-full h-[3.5rem] bg-[#F9F9F9] border border-[#E6E6E6] rounded-[0.3rem] text-btnText text-[#737373] pl-[1rem]"
              placeholder="Your Email"
            />
            <button className="w-[30%] h-[3.5rem] bg-[#23A6F0] border border-[#E6E6E6] rounded-[0.3rem] text-btnText text-white">
              Subscribe
            </button>
          </div>
          <p className="text-small text-[#737373]">Lore imp sum dolor Amit</p>
        </div>
      </div>
      <div className="bg-[#FAFAFA] flex items-center justify-center p-[3rem]">
        <p className="w-[14rem] font-bold text-link text-center text-[#737373]">
          Made With Love By Finland All Right Reserved
        </p>
      </div>
    </div>
  );
}
