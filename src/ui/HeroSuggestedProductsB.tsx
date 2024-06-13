import HeroProductItem from "./HeroProductItem";
import discount from "../assets/images/discount.svg";
import { useProductStore } from "../stores/productStore";
function HeroSuggestedProductsB() {
  const { eightProducts, isLoading, error } = useProductStore();
  return (
    <section className="bg-lightBlue  px-4 py-10">
      <main className=" container mx-auto px-4 py-10">
        <div className="flex items-center gap-10">
          <img src={discount} alt="discount banner" className="rotateX-180" />
          <div>
            <header className="mb-6">
              <h3 className="mb-3 text-2xl font-semibold text-darkBlack">
                 shop now
              </h3>
              <h2 className="text-2xl font-semibold text-darkBlack">
                suggested products
              </h2>
            </header>
            <main className="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {!isLoading &&
                eightProducts.map((product) => (
                  <HeroProductItem key={product.id} product={product} />
                ))}
              {isLoading && <p>Loading...</p>}
              {error && <p>{error}</p>}
            </main>
          </div>
        </div>
      </main>
    </section>
  );
}

export default HeroSuggestedProductsB;
