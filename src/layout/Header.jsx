export default function Header() {
  return (
    <>
      <div className="w-screen h-[34rem] flex flex-col lg:hidden">
        <div className="flex justify-between px-[1.5rem] py-[2rem]">
          <h3 className="font-bold text-2xl text-[#252B42]">CodeCouture</h3>
          <div className="w-[8rem] flex justify-between self-stretch">
            <button>
              <img src=".\assets\nav\icn search .icn-xs.png" alt="" />
            </button>
            <button>
              <img src=".\assets\nav\icn shopping-cart .icn-xs.png" alt="" />
            </button>
            <button>
              <img src=".\assets\nav\icn menu .icn-xs.png" alt="" />
            </button>
          </div>
        </div>
        <nav className="h-full flex flex-col justify-between gap-1 mx-auto my-[5rem] text-center text-[1.875rem] lg:hidden">
          <a href="" className="">
            Home
          </a>
          <a href="" className="">
            Product
          </a>
          <a href="" className="">
            Pricing
          </a>
          <a href="" className="">
            Contact
          </a>
        </nav>
      </div>

      <div className="hidden lg:grid grid-cols-3 w-screen h-[5rem] bg-[#252B42] items-center justify-between font-bold text-white text-[0.9rem] px-[3rem]">
        <div className="flex gap-2 justify-start">
          <button className="flex gap-1 items-center">
            <img src="./assets/nav/phone.svg" alt="Phone Icon" />
            (225) 555-0118
          </button>
          <button className="flex gap-1 items-center">
            <img src=".\assets\nav\mail.svg" alt="Mail Icon" />
            michelle.rivera@example.com
          </button>
        </div>
        <div className="text-center">
          <h6>Follow Us and get a chance to win 80% off</h6>
        </div>
        <div className="flex gap-4 justify-end">
          <h6>Follow Us :</h6>
          <img src=".\assets\nav\instagram.svg" alt="Instagram Icon" />
          <img src=".\assets\nav\youtube.svg" alt="Youtube Icon" />
          <img src=".\assets\nav\facebook.svg" alt="Facebook Icon" />
          <img src=".\assets\nav\twitter.svg" alt="Twitter Icon" />
        </div>
      </div>
      <div className="hidden lg:grid grid-cols-3 w-screen h-[6rem] items-center justify-between font-bold leading-[1.5rem] text-center text-sm px-[3rem]">
        <h3 className="font-bold text-2xl text-start text-[#252B42]">
          CodeCouture
        </h3>
        <nav className="flex gap-1 items-center justify-evenly text-[#737373]">
          <a href="" className="">
            Home
          </a>
          <div className="dropdown">
            <button className="dropbtn">Shop</button>
            <div className="dropdown-content"></div>
          </div>
          <a href="" className="">
            About
          </a>
          <a href="" className="">
            Blog
          </a>
          <a href="" className="">
            Contact
          </a>
          <a href="" className="">
            Pages
          </a>
        </nav>
        <div className="flex gap-5 items-center justify-end">
          <button className="flex gap-1 items-center text-[#23A6F0]">
            <img src=".\assets\nav\user.svg" alt="Mail Icon" />
            Login / Register
          </button>
          <button>
            <img src=".\assets\nav\search.svg" alt="Mail Icon" />
            {}
          </button>
          <button>
            <img src=".\assets\nav\shop.svg" alt="Mail Icon" />
            {}
          </button>
          <button>
            <img src=".\assets\nav\favorite.svg" alt="Mail Icon" />
            {}
          </button>
        </div>
      </div>
    </>
  );
}
