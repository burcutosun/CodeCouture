export default function Clients() {
  const brands = [
    {
      logo: "./assets/brands/Vector.png",
    },
    {
      logo: "./assets/brands/Vector-1.png",
    },
    {
      logo: "./assets/brands/Vector-2.png",
    },
    {
      logo: "./assets/brands/Vector-3.png",
    },
    {
      logo: "./assets/brands/Vector-4.png",
    },
    {
      logo: "./assets/brands/Vector-5.png",
    },
  ];
  return (
    <div className="w-screen bg-[#FAFAFA] flex flex-col gap-4 py-[4rem] lg:flex-row">
      {brands.map((item, index) => {
        return <img className="m-auto" key={index} src={item.logo} alt="" />;
      })}
    </div>
  );
}
