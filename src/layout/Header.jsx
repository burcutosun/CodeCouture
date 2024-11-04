import {
  Bars3BottomRightIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/16/solid";
import { HeartIcon, UserIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../store/actions/clientActions";
export default function Header() {
  const data = useContext(DataContext);
  const { navLinks } = data;

  const [isOpen, SetIsOpen] = useState(false);

  /*   const categories = useSelector((state) => state.global.categories); */
  const user = useSelector((state) => state.client.user);

  const dispatch = useDispatch();

  const toggleDropdown = () => {
    SetIsOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.getItem("token") ? localStorage.removeItem("token") : null;
    dispatch(setLogout());
  };

  const userMenu = (
    <div className="flex flex-col gap-5 items-center justify-end text-mobileMenu text-primary lg:flex-row lg:text-h6">
      <div className="flex gap-1 items-center text-center">
        {user.isLoggedIn ? (
          <>
            <Link className="mr-2" to="/">
              {user.email}
            </Link>
            <button onClick={handleLogout}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#23A6F0"
              >
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
              </svg>
            </button>
          </>
        ) : (
          <>
            <UserIcon className="w-[2.5rem] aspect-square lg:w-6" />
            <Link to="/login">Login /</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
      <Link to="">
        <MagnifyingGlassIcon className="w-10 aspect-square text-primary lg:w-6" />
        {}
      </Link>
      <Link to="">
        <ShoppingCartIcon className="w-10 aspect-square text-primary lg:w-6" />
        {}
      </Link>
      <Link to="">
        <HeartIcon className="w-10 aspect-square text-primary lg:w-6" />

        {}
      </Link>
    </div>
  );

  return (
    <>
      <div className="w-screen flex flex-col gap-5 pb-8 lg:hidden">
        <div className="flex justify-between p-8">
          <Link to="/" className="font-bold text-h3 text-default">
            CodeCouture
          </Link>
          <Link to="">
            <Bars3BottomRightIcon className="w-10 aspect-square text-default" />
          </Link>
        </div>
        <nav className="flex flex-col justify-between gap-8 mx-auto my-8 text-center text-mobileMenu lg:hidden">
          {navLinks.map((item, index) =>
            item.title === "Shop" ? (
              <div key={index}>
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center gap-x-1.5"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      onClick={toggleDropdown}
                    >
                      Shop
                      <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  {isOpen && (
                    <div
                      className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex="-1"
                    >
                      <div className="py-1" role="none">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-0"
                        >
                          Edit
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-1"
                        >
                          Duplicate
                        </a>
                      </div>
                      <div className="py-1" role="none">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-2"
                        >
                          Archive
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-3"
                        >
                          Move
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <Link key={index} to={item.to}>
                {item.title}
              </Link>
            )
          )}
        </nav>
        {userMenu}
      </div>

      <div className="hidden lg:grid grid-cols-3 w-screen bg-default items-center justify-between p-5 px-10 font-bold text-h6 text-[#FFFFFF]">
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

      <div className="hidden lg:grid grid-cols-3 w-screen items-center justify-between p-5 px-10 font-bold text-center text-link">
        <Link to="/" className="font-bold text-h3 text-start text-default">
          CodeCouture
        </Link>
        <nav className="flex gap-1 items-center justify-evenly text-second">
          {navLinks.map((item, index) =>
            item.title === "Shop" ? (
              <div key={index}>
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center gap-x-1.5"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      onClick={toggleDropdown}
                    >
                      Shop
                      <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  {isOpen && (
                    <div
                      className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex="-1"
                    >
                      <div className="py-1" role="none">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-0"
                        >
                          Edit
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-1"
                        >
                          Duplicate
                        </a>
                      </div>
                      <div className="py-1" role="none">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-2"
                        >
                          Archive
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-3"
                        >
                          Move
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <Link key={index} to={item.to}>
                {item.title}
              </Link>
            )
          )}
        </nav>
        {userMenu}
      </div>
    </>
  );
}
