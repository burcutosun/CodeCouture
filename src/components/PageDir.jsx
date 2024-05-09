import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

export default function PageDir() {
  const path = window.location.pathname;
  return (
    <div className="w-screen bg-[#FAFAFA] flex flex-col items-center p-20 lg:flex-row lg:justify-between lg:py-4">
      {path === "/shop" && (
        <h2 className="font-bold text-h3 text-[#252B42]">Shop</h2>
      )}
      <nav className="flex justify-center p-5">
        <Link to="/" className="font-bold text-link">
          Home
        </Link>
        <ChevronRightIcon className="w-6 h-6 text-[#BDBDBD]" />
        <Link to="/shop" className="font-bold text-h6 text-[#737373]">
          Shop
        </Link>
      </nav>
    </div>
  );
}
