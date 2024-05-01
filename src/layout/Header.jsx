import { Link } from "react-router-dom";
export default function Header() {
  const navLinks = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Shop",
      to: "/shop",
    },
    {
      title: "About",
      to: "/about",
    },
    {
      title: "Blog",
      to: "/blog",
    },
    {
      title: "Contact",
      to: "/contact",
    },
    {
      title: "Pages",
      to: "/pages",
    },
  ];
  return (
    <>
      <div className="w-screen flex flex-col lg:hidden">
        <div className="flex justify-between px-[1.5rem] py-[2rem]">
          <h3 className="font-bold text-2xl text-[#252B42]">CodeCouture</h3>
          <div className="w-[8rem] flex justify-between self-stretch">
            <Link to="">
              <img src=".\assets\hero\nav\icn search .icn-xs.png" alt="" />
            </Link>
            <Link to="">
              <img
                src=".\assets\hero\nav\icn shopping-cart .icn-xs.png"
                alt=""
              />
            </Link>
            <Link to="">
              <img src=".\assets\hero\nav\icn menu .icn-xs.png" alt="" />
            </Link>
          </div>
        </div>
        <nav className="flex flex-col justify-between gap-[2rem] mx-auto my-[5rem] text-center text-[1.875rem] lg:hidden">
          {navLinks.map((item, index) => {
            return (
              <Link key={index} to={item.to}>
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="hidden lg:grid grid-cols-3 w-screen p-5 bg-[#252B42] items-center justify-between font-bold text-white text-[0.9rem] px-[3rem]">
        <div className=" flex flex-col xl:flex-row gap-4 justify-start">
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
            <img src=".\assets\hero\nav\instagram.svg" alt="Instagram Icon" />
          </Link>
          <Link to="">
            <img src=".\assets\hero\nav\youtube.svg" alt="Youtube Icon" />
          </Link>
          <Link to="">
            <img src=".\assets\hero\nav\facebook.svg" alt="Facebook Icon" />
          </Link>
          <Link to="">
            <img src=".\assets\hero\nav\twitter.svg" alt="Twitter Icon" />
          </Link>
        </div>
      </div>
      <div className="hidden lg:grid grid-cols-3 w-screen h-[5rem] items-center justify-between font-bold leading-[1.5rem] text-center text-sm px-[3rem]">
        <h3 className="font-bold text-2xl text-start text-[#252B42]">
          CodeCouture
        </h3>
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
        <div className="flex gap-5 items-center justify-end">
          <Link to="" className="flex gap-1 items-center text-[#23A6F0]">
            <img src=".\assets\hero\nav\user.svg" alt="Mail Icon" />
            Login / Register
          </Link>
          <Link to="">
            <img src=".\assets\hero\nav\search.svg" alt="Mail Icon" />
            {}
          </Link>
          <Link to="">
            <img src=".\assets\hero\nav\shop.svg" alt="Mail Icon" />
            {}
          </Link>
          <Link to="">
            <img src=".\assets\hero\nav\favorite.svg" alt="Mail Icon" />
            {}
          </Link>
        </div>
      </div>
    </>
  );
}
