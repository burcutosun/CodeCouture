import { useContext } from "react";
import Team from "../components/Team";
import { DataContext } from "../context/DataContext";
import Clients from "../components/Clients";

export default function About() {
  const data = useContext(DataContext);
  const { stats } = data;
  return (
    <>
      <div className="flex flex-col gap-10 items-center lg:flex-row lg:justify-evenly lg:px-24">
        <div className="flex flex-col gap-12 items-center max-w-2xl py-36 lg:items-start lg:p-0">
          <h2 className="mb-8 font-bold text-h2 text-default lg:text-h1">
            ABOUT US
          </h2>
          <h4 className="px-[6.5rem] text-center text-h4 text-second lg:pl-0 lg:text-start">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </h4>
          <button className="w-48 h-12 bg-primary rounded-[5px] font-bold text-btnText text-white">
            Get Quote Now
          </button>
        </div>
        <img
          className="w-full max-w-[40rem]"
          src=".\assets\about\none.png"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-20 px-24 pt-20 lg:flex-row lg:justify-center lg:p-20 2xl:px-56">
        <div className="p-6 text-center lg:text-start">
          <p className="pb-6 text-paragraph text-danger">Problems trying</p>
          <h3 className="font-bold text-h3 text-default">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
        <p className="flex items-center text-paragraph text-second">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      <div className="flex flex-col gap-20 items-center justify-evenly py-32 text-center lg:flex-row lg:px-20">
        <div>
          <h1 className="font-bold text-h1 text-default">
            {stats.customers.count}
          </h1>
          <h5 className="font-bold text-h5 text-second">
            {stats.customers.title}
          </h5>
        </div>
        <div>
          <h1 className="font-bold text-h1 text-default">
            {stats.visitors.count}
          </h1>
          <h5 className="font-bold text-h5 text-second">
            {stats.visitors.title}
          </h5>
        </div>
        <div>
          <h1 className="font-bold text-h1 text-default">
            {stats.countries.count}
          </h1>
          <h5 className="font-bold text-h5 text-second">
            {stats.countries.title}
          </h5>
        </div>
        <div>
          <h1 className="font-bold text-h1 text-default">
            {stats.partners.count}
          </h1>
          <h5 className="font-bold text-h5 text-second">
            {stats.partners.title}
          </h5>
        </div>
      </div>
      <div className="p-10">
        <video class="w-full rounded-3xl lg:w-[70rem] lg:mx-auto" controls>
          <source
            src=".\assets\about\3888252-uhd_4096_2160_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <Team />
      <div className="bg-[#FAFAFA] flex flex-col gap-8 p-16 pb-0 text-center">
        <h2 className="font-bold text-h2 text-default">
          Big Companies Are Here
        </h2>
        <p className="text-paragraph text-second">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      <Clients />
    </>
  );
}
