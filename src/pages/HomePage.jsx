import Blog from "../components/Blog";
import Campaign from "../components/Campaign";
import Carousel from "../components/Carousel";
import ProductCards from "../components/ProductCards";
import ShopCards from "../components/ShopCards";

export default function HomePage() {
  return (
    <>
      <Carousel />
      <ShopCards />
      <ProductCards />
      <Carousel />
      <Campaign />
      <Blog />
    </>
  );
}
