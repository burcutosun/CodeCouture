import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

export default function Footer() {
  const data = useContext(DataContext);
  const { footerLinks } = data;
  const path = window.location.pathname;
  return (
    <div className="w-screen">
      <div
        className={`flex flex-col gap-5 items-start p-12 py-16 lg:flex-row lg:justify-between lg:px-[8rem] ${
          path === "/" ? "bg-[#FAFAFA]" : "bg-white"
        }`}
      >
        <h3 className="font-bold text-h3 text-[#252B42]">CodeCouture</h3>
        {path !== "/contact" && (
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
        )}
      </div>
      <div className="w-full grid grid-rows-4 gap-6 px-12 py-20 lg:grid-rows-1 lg:grid-cols-[15%_15%_15%_15%_34%] lg:px-32">
        {footerLinks.map((item, index) => {
          return (
            <div className="flex flex-col justify-between gap-4" key={index}>
              <h5 className="font-bold text-h5 text-[#252B42]">{item.title}</h5>
              {item.links.map((item, index) => {
                return (
                  <Link
                    className="font-bold text-link text-[#737373]"
                    key={index}
                    to={item.to}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          );
        })}
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
