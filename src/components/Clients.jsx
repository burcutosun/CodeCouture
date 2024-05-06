import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Clients() {
  const data = useContext(DataContext);
  const { brands } = data;

  return (
    <div className="w-screen bg-[#FAFAFA] flex flex-col gap-4 py-[4rem] lg:flex-row">
      {brands.map((item, index) => {
        return <img className="m-auto" key={index} src={item.logo} alt="" />;
      })}
    </div>
  );
}
