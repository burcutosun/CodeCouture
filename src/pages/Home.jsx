import { useContext } from "react";
import Blog from "../components/Blog";
import Campaign from "../components/Campaign";
import Carousel from "../components/Carousel";
import Products from "../components/Products";
import ShopCards from "../components/ShopCards";
import { DataContext } from "../context/DataContext";

export default function Home() {
  const data = useContext(DataContext);
  const { carouselTop, carouselBottom } = data;
  return (
    <>
      <Carousel carouselTop={carouselTop} />
      <ShopCards />
      <Products />
      <Carousel carouselBottom={carouselBottom} />
      <Campaign />
      <Blog />
    </>
  );
}
