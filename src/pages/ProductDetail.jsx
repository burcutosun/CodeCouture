import { useParams } from "react-router-dom";
import PageDir from "../components/PageDir";
import ProductInfo from "../components/ProductInfo";
import Clients from "../components/Clients";

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <>
      <PageDir />
      <ProductInfo id={id} />
      <Clients />
    </>
  );
}
