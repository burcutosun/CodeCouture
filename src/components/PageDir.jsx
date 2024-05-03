import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function PageDir() {
  return (
    <div className="w-screen bg-[#FAFAFA] flex flex-col items-center p-[3rem] lg:flex-row lg:justify-between lg:py-0">
      <h2 className="font-bold text-2xl text-[#252B42]">Shop</h2>
      <nav className="flex p-5 justify-center">
        <Link to="/" className="font-bold">
          Home
        </Link>
        <ChevronRightIcon className="w-6 h-6 text-[#BDBDBD]" />
        <Link to="/shop" className="font-bold text-[#737373]">
          Shop
        </Link>
      </nav>
    </div>
  );
}
