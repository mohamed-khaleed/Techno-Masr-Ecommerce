import HeroProductItem from "./HeroProductItem";
import discount from "../assets/images/discount.svg";
import telephone from "../assets/images/telephoneBanner.svg";
import apple from "../assets/images/appleBanner.svg";
import { useProductStore } from "../stores/productStore";

function HeroSuggestedProducts() {
  const { eightProducts, isLoading, error } = useProductStore();
  return (
    <section className="container mx-auto px-4 py-10">
      <header>
        <h2 className="text-2xl font-semibold text-darkBlack">
          suggested products
        </h2>
      </header>
      <main className="flex flex-col gap-14">
        <div className="flex items-center gap-10">
          <div className="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {!isLoading &&
              eightProducts.map((product) => (
                <HeroProductItem key={product.id} product={product} />
              ))}
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
          </div>
          <img src={discount} alt="discount banner"  className="rotateX-180"/>
        </div>
        <div className="flex items-center justify-around">
          <img src={apple} alt="apple" className="rotateX-180"/>
          <img src={telephone} alt="telephone" className="rotateX-180" />
        </div>
      </main>
    </section>
  );
}

export default HeroSuggestedProducts;
