import ProductsHeader from "../features/products/ProductsHeader";
import ProductsBody from "../features/products/ProductsBody.tsx";
import Navbar from "../features/navbar/Navbar.tsx";
import Footer from "../ui/Footer.tsx";

const Products: React.FC = () => {
  return (
    <>
      <Navbar/>
      <section className="container mx-auto px-4 py-10">
        <ProductsHeader />
        <ProductsBody />
      </section>
      <Footer/>
    </>
  );
};

export default Products;
