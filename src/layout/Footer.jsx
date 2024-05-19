import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

export default function Footer() {
  const data = useContext(DataContext);
  const { footerLinks } = data;
  const path = window.location.pathname;

  /* ${
    path === "/" ? "bg-[#FAFAFA]" : "bg-white"
  } */

  return (
    <div className="w-screen">
      <div className="bg-white flex flex-col gap-5 items-start p-12 lg:flex-row lg:justify-between lg:px-32">
        <h3 className="font-bold text-h3 text-default">CodeCouture</h3>
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
      <div className="w-full grid grid-rows-4 gap-6 px-12 py-16 lg:grid-rows-1 lg:grid-cols-[15%_15%_15%_15%_34%] lg:px-32">
        {footerLinks.map((item, index) => {
          return (
            <div className="flex flex-col justify-between gap-4" key={index}>
              <h5 className="font-bold text-h5 text-default">{item.title}</h5>
              {item.links.map((item, index) => {
                return (
                  <Link
                    className="font-bold text-link text-second"
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
          <h5 className="font-bold text-h5 text-default">Get In Touch</h5>
          <div className="w-full border flex">
            <input
              className="w-full h-14 bg-[#F9F9F9] border border-[#E6E6E6] rounded-md text-btnText text-second pl-4"
              placeholder="Your Email"
            />
            <button className="w-[30%] h-14 bg-primary border border-[#E6E6E6] rounded-md text-btnText text-white">
              Subscribe
            </button>
          </div>
          <p className="text-small text-second">Lore imp sum dolor Amit</p>
        </div>
      </div>
      <div className="bg-[#FAFAFA] flex items-center justify-center py-8">
        <p className="w-56 font-bold text-link text-center text-second">
          Made With Love By Finland All Right Reserved
        </p>
      </div>
    </div>
  );
}
