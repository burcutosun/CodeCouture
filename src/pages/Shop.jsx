import Clients from "../components/Clients";
import Pagination from "../components/Pagination";
import PageDir from "../components/PageDir";
import Categories from "../components/Categories";
import Filter from "../components/Filter";
import ProductCards from "../components/ProductCards";

export default function Shop() {
  return (
    <>
      <PageDir />
      <Categories />
      <Filter />
      <ProductCards />
      <Pagination />
      <Clients />
    </>
  );
}
