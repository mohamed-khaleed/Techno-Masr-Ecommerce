import HeroProductItem from "./HeroProductItem";
import discount from "../assets/images/discount.svg";
function HeroSuggestedProductsB() {
  return (
    <section className="bg-lightBlue  px-4 py-10">
      <main className=" container mx-auto px-4 py-10">
        <div className="flex items-center gap-40">
          <img src={discount} alt="discount banner" />
          
          <div>
            <header className="mb-6">
              <h3 className="text-2xl font-semibold text-darkBlack mb-3">تسوق الآن</h3>
              <h2 className="text-2xl font-semibold text-darkBlack">
                منتجاتنا المقترحة
              </h2>
            </header>
            <main className="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <HeroProductItem />
              <HeroProductItem />
              <HeroProductItem />
              <HeroProductItem />
              <HeroProductItem />
              <HeroProductItem />
              <HeroProductItem />
              <HeroProductItem />
            </main>
          </div>
        </div>
      </main>
    </section>
  );
}

export default HeroSuggestedProductsB;
