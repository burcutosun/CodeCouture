import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import Carousel from "./Carousel";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function ProductInfo(props) {
  const data = useContext(DataContext);
  const { products } = data;
  const { id } = props;
  let selected = null;

  for (const product of products) {
    if (product.id === id) {
      selected = product;
      break;
    }
  }

  if (!selected) {
    return <div className="text-center">Ürün bulunamadı.</div>;
  }
  //dropdown paragraph
  const [displayInfo, setDisplayInfo] = useState({ id: null, status: false });

  const handleDisplay = (id) => {
    setDisplayInfo({ id: id, status: !displayInfo.status });
  };
  //
  return (
    <>
      <div className="bg-[#FAFAFA] p-8">
        <div className="w-full flex flex-col max-w-[90rem] mx-auto lg:flex-row">
          <div className="lg:w-[50%]">
            <Carousel detailImages={selected.detailImages} />
            <div className="flex gap-4 py-5">
              {selected.detailImages.map((item, index) => (
                <img className="w-[10rem]" key={index} src={item} alt="" />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 p-[3rem]">
            <h4 className="font-bold text-h4 text-default">Floating Phone</h4>
            <div className="flex gap-2 items-center">
              <StarIcon className="h-6 w-6 text-[#F3CD03]" />
              <StarIcon className="h-6 w-6 text-[#F3CD03]" />
              <StarIcon className="h-6 w-6 text-[#F3CD03]" />
              <StarIcon className="h-6 w-6 text-[#F3CD03]" />
              <OutlineStarIcon className="h-6 w-6 text-[#F3CD03]" />
              <h6 className="font-bold text-h6 text-second">10 Reviews</h6>
            </div>
            <h5 className="font-bold text-h3 text-default">{selected.price}</h5>
            <div className="flex gap-2">
              <h6 className="font-bold text-h6 text-second">Availability :</h6>
              <h6 className="font-bold text-h6 text-primary">
                {selected.availability}
              </h6>
            </div>
            <p className="text-paragraph text-[#858585]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <hr className="text-muted" />
            <div className="flex gap-1.5">
              {selected.productColors.map((item, index) => (
                <span
                  key={index}
                  className={`w-8 h-8 rounded-full`}
                  style={{ backgroundColor: `${item}` }}
                ></span>
              ))}
            </div>
            <div className="w-full flex gap-4 mt-8">
              <button className="w-[9.25rem] h-[2.75rem] bg-primary mr-2 rounded-[0.4rem] font-bold text-h6 text-white">
                Select Options
              </button>
              <button className="w-[2.5rem] aspect-square border border-muted rounded-full text-default">
                <span className="material-symbols-outlined grid center">
                  favorite
                </span>
              </button>
              <button className="w-[2.5rem] aspect-square border border-muted rounded-full text-default">
                <span className="material-symbols-outlined grid center">
                  shopping_cart
                </span>
              </button>
              <button className="w-[2.5rem] aspect-square border border-muted rounded-full text-default">
                <span className="material-symbols-outlined grid center">
                  visibility
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <nav className="flex justify-evenly max-w-[90rem] mx-auto p-8 font-bold text-link text-second">
          <Link to="">Description</Link>
          <Link to="">Additional Information</Link>
          <Link to="">
            Reviews{" "}
            <span className="text-secondary-1">({selected.reviewCount})</span>
          </Link>
        </nav>
        <div className="flex flex-col gap-8 max-w-[90rem] mx-auto px-2 py-24 lg:flex-row lg:justify-between">
          <img
            className="w-full rounded self-center shadow-[5px_12px_rgba(196,196,196,0.2)] lg:w-[25rem] lg:h-[24.5rem]"
            src="https://s3-alpha-sig.figma.com/img/8b0c/0f76/c949a2cffacf01d40c82241e905719cb?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iKOQyKCzeRLHBbPNEF6N0BlM3CZFIZ8ueCY0VT02me5jBMf~KHqx2ZFmfS8iLV90A4carfCqnLgQZp7ZcmJjY9ok8~SiOHxzecMsXSWBsSthC863Vb3YXLuwmVGn9LMdgD80XXy70HTwpc9uMhV2~l5pe6GXbJihHjKGPGjdsYKuMJw47QBIiiCbGqN7I219X1-yIEefDqPF7q22DB9TPrYbp7gx2MhW6UfM-M2iSsQ8IaqgejrfgMN7yHtliUBYGlmhZncukXfml5KCn5XjV2b5lGCZDOWmNq5A3sIqORIBm2kwBMK86DDnU0EquDICs-PWt-jM2irqqPztcQ2kWg__"
            alt=""
          />
          <div className="flex flex-col gap-5 px-4 lg:w-[28rem]">
            <h3 className="font-bold text-h3 text-default">
              the quick fox jumps over{" "}
            </h3>
            <p className="text-paragraph text-second">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="text-paragraph text-second">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="text-paragraph text-second">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div className="w-full flex flex-col gap-5 px-4 lg:w-[28rem]">
            <div>
              <h3 className="mb-6 font-bold text-h3 text-default">
                the quick fox jumps over{" "}
              </h3>
              <div className="flex flex-col">
                <button
                  className="flex gap-2 font-bold text-h6 text-second"
                  id="1"
                  onClick={() => handleDisplay("1")}
                >
                  {displayInfo.id === "1" && displayInfo.status ? (
                    <ChevronDownIcon className="h-6 w-6 text-gray-500" />
                  ) : (
                    <ChevronRightIcon className="w-6 h-6 text-[#BDBDBD]" />
                  )}
                  the quick fox jumps over the lazy dog
                </button>
                {displayInfo.id === "1" && displayInfo.status && (
                  <p id="1">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                )}
                <button
                  className="flex gap-2 font-bold text-h6 text-second"
                  id="2"
                  onClick={() => handleDisplay("2")}
                >
                  {displayInfo.id === "2" && displayInfo.status ? (
                    <ChevronDownIcon className="h-6 w-6 text-gray-500" />
                  ) : (
                    <ChevronRightIcon className="w-6 h-6 text-[#BDBDBD]" />
                  )}
                  the quick fox jumps over the lazy dog
                </button>
                {displayInfo.id === "2" && displayInfo.status && (
                  <p id="2">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                )}
                <button
                  className="flex gap-2 font-bold text-h6 text-second"
                  id="3"
                  onClick={() => handleDisplay("3")}
                >
                  {displayInfo.id === "3" && displayInfo.status ? (
                    <ChevronDownIcon className="h-6 w-6 text-gray-500" />
                  ) : (
                    <ChevronRightIcon className="w-6 h-6 text-[#BDBDBD]" />
                  )}
                  the quick fox jumps over the lazy dog
                </button>
                {displayInfo.id === "3" && displayInfo.status && (
                  <p id="3">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                )}
                <button
                  className="flex gap-2 font-bold text-h6 text-second"
                  id="4"
                  onClick={() => handleDisplay("4")}
                >
                  {displayInfo.id === "4" && displayInfo.status ? (
                    <ChevronDownIcon className="h-6 w-6 text-gray-500" />
                  ) : (
                    <ChevronRightIcon className="w-6 h-6 text-[#BDBDBD]" />
                  )}
                  the quick fox jumps over the lazy dog
                </button>
                {displayInfo.id === "4" && displayInfo.status && (
                  <p id="4">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                )}
              </div>
            </div>
            <div>
              <h3 className="mb-6 font-bold text-h3 text-default">
                the quick fox jumps over{" "}
              </h3>
              <div className="flex flex-col">
                <button
                  className="flex gap-2 font-bold text-h6 text-second"
                  id="5"
                  onClick={() => handleDisplay("5")}
                >
                  {displayInfo.id === "5" && displayInfo.status ? (
                    <ChevronDownIcon className="h-6 w-6 text-gray-500" />
                  ) : (
                    <ChevronRightIcon className="w-6 h-6 text-[#BDBDBD]" />
                  )}
                  the quick fox jumps over the lazy dog
                </button>
                {displayInfo.id === "5" && displayInfo.status && (
                  <p id="5">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                )}
                <button
                  className="flex gap-2 font-bold text-h6 text-second"
                  id="6"
                  onClick={() => handleDisplay("6")}
                >
                  {displayInfo.id === "6" && displayInfo.status ? (
                    <ChevronDownIcon className="h-6 w-6 text-gray-500" />
                  ) : (
                    <ChevronRightIcon className="w-6 h-6 text-[#BDBDBD]" />
                  )}
                  the quick fox jumps over the lazy dog
                </button>
                {displayInfo.id === "6" && displayInfo.status && (
                  <p id="6">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                )}
                <button
                  className="flex gap-2 font-bold text-h6 text-second"
                  id="7"
                  onClick={() => handleDisplay("7")}
                >
                  {displayInfo.id === "7" && displayInfo.status ? (
                    <ChevronDownIcon className="h-6 w-6 text-gray-500" />
                  ) : (
                    <ChevronRightIcon className="w-6 h-6 text-[#BDBDBD]" />
                  )}
                  the quick fox jumps over the lazy dog
                </button>
                {displayInfo.id === "7" && displayInfo.status && (
                  <p id="7">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                )}
                <button
                  className="flex gap-2 font-bold text-h6 text-second"
                  id="8"
                  onClick={() => handleDisplay("8")}
                >
                  {displayInfo.id === "8" && displayInfo.status ? (
                    <ChevronDownIcon className="h-6 w-6 text-gray-500" />
                  ) : (
                    <ChevronRightIcon className="w-6 h-6 text-[#BDBDBD]" />
                  )}
                  the quick fox jumps over the lazy dog
                </button>
                {displayInfo.id === "8" && displayInfo.status && (
                  <p id="8">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
