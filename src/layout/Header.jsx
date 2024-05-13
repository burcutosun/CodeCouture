import {
  Bars3BottomRightIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/16/solid";
import { HeartIcon, UserIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
export default function Header() {
  const data = useContext(DataContext);
  const { navLinks } = data;

  const userMenu = (
    <div className="flex flex-col gap-5 items-center justify-end text-mobileMenu text-[#23A6F0] lg:flex-row lg:text-h6">
      <div className="flex gap-1 items-center text-center">
        <UserIcon className="w-[2.5rem] aspect-square lg:w-6" />
        <Link to="/login">Login /</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
      <Link to="">
        <MagnifyingGlassIcon className="w-[2.5rem] aspect-square text-[#23A6F0] lg:w-6" />
        {}
      </Link>
      <Link to="">
        <ShoppingCartIcon className="w-[2.5rem] aspect-square text-[#23A6F0] lg:w-6" />
        {}
      </Link>
      <Link to="">
        <HeartIcon className="w-[2.5rem] aspect-square text-[#23A6F0] lg:w-6" />

        {}
      </Link>
    </div>
  );
  return (
    <>
      <div className="w-screen flex flex-col gap-5 pb-8 lg:hidden">
        <div className="flex justify-between p-[2rem]">
          <Link to="/" className="font-bold text-h3 text-[#252B42]">
            CodeCouture
          </Link>
          <Link to="">
            <Bars3BottomRightIcon className="w-[2.5rem] aspect-square text-[#252B42]" />
          </Link>
        </div>
        <nav className="flex flex-col justify-between gap-[2rem] mx-auto my-[2rem] text-center text-mobileMenu lg:hidden">
          {navLinks.map((item, index) => {
            return (
              <Link key={index} to={item.to}>
                {item.title}
              </Link>
            );
          })}
        </nav>
        {userMenu}
      </div>

      <div className="hidden lg:grid grid-cols-3 w-screen bg-[#252B42] items-center justify-between p-5 px-[2.5rem] font-bold text-h6 text-[#FFFFFF]">
        <div className=" flex flex-col gap-4 justify-start xl:flex-row">
          <button className="flex gap-1 items-center">
            <img src=".\assets\hero\nav\phone.svg" alt="Phone Icon" />
            (225) 555-0118
          </button>
          <button className="flex gap-1 items-center">
            <img src=".\assets\hero\nav\mail.svg" alt="Mail Icon" />
            michelle.rivera@example.com
          </button>
        </div>
        <div className="text-center">
          <h6>Follow Us and get a chance to win 80% off</h6>
        </div>
        <div className="flex gap-4 items-center justify-end">
          <h6>Follow Us :</h6>
          <Link to="">
            <img src=".\assets\hero\nav\facebook.svg" alt="Facebook Icon" />
          </Link>
          <Link to="">
            <img src=".\assets\hero\nav\instagram.svg" alt="Instagram Icon" />
          </Link>
          <Link to="">
            <img src=".\assets\hero\nav\twitter.svg" alt="Twitter Icon" />
          </Link>
          <Link to="">
            <img src=".\assets\hero\nav\youtube.svg" alt="Youtube Icon" />
          </Link>
        </div>
      </div>
      <div className="hidden lg:grid grid-cols-3 w-screen items-center justify-between p-5 px-[2.5rem] font-bold text-center text-link">
        <Link to="/" className="font-bold text-h3 text-start text-[#252B42]">
          CodeCouture
        </Link>
        <nav className="flex gap-1 items-center justify-evenly text-[#737373]">
          {navLinks.map((item, index) => {
            if (item === "Shop") {
              return (
                <Link key={index} to={item.to} className="dropdown">
                  <button className="dropbtn">{item.title}</button>
                  <div className="dropdown-content"></div>
                </Link>
              );
            } else {
              return (
                <Link key={index} to={item.to}>
                  {item.title}
                </Link>
              );
            }
          })}
        </nav>
        {userMenu}
      </div>
    </>
  );
}
