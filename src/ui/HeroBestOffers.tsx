
import { useNavigate } from "react-router-dom";
import { useProductStore } from "../stores/productStore";
import HeroProductItem from "./HeroProductItem";
function HeroBestOffers() {
  const { eightProducts, isLoading, error } = useProductStore();
  const navigate = useNavigate();
  const handleProductsClick = () => {
    navigate(`/products`);
  };
  return (
    <section className="container mx-auto px-4 py-10">
      <header className="flex items-center justify-between pb-3 ">
        <h2 className="text-2xl font-semibold text-darkBlack ml-4">Best offers </h2>
        <p onClick={handleProductsClick} className="text-[14px] font-semibold text-darkBlue mr-6 cursor-pointer">see all</p>
      </header>
      <main className="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {!isLoading && eightProducts.map((product) => (
          <HeroProductItem key={product.id} product={product} />
        ))}
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </main>
    </section>
  );
}

export default HeroBestOffers;
