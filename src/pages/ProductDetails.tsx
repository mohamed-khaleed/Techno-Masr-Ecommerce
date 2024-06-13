import { useParams } from "react-router-dom";
import DescriptionBox from "../features/productDetails/DescriptionBox";
import DetailsBody from "../features/productDetails/DetailsBody";
import DetailsHeader from "../features/productDetails/DetailsHeader";
import DetailsInformation from "../features/productDetails/DetailsInformation";
import { useProductStore } from "../stores/productStore";
import { useEffect } from "react";
import Navbar from "../features/navbar/Navbar";
import Footer from "../ui/Footer";

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { singleProduct, fetchProductById, isLoading, error } =
    useProductStore();
  useEffect(() => {
    if (productId) {
      fetchProductById(Number(productId));
    }
  }, [productId]);
  return (
    <>
      <Navbar/>
      <section className="container mx-auto px-4 py-10">
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <DetailsHeader />
        <main className="flex flex-col gap-16 py-10">
          <DetailsInformation />
          <DescriptionBox />
        </main>
      </section>
      <Footer/>
    </>
  );
};

export default ProductDetails;
