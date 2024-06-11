import ProductsHeader from "../features/products/ProductsHeader";
import ProductsBody from "../features/products/ProductsBody.tsx";

const Products: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <ProductsHeader />
      <ProductsBody />
    </section>
  );
};

export default Products;
