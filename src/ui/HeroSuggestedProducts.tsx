import HeroProductItem from "./HeroProductItem";
import discount from "../assets/images/discount.svg";
import telephone from "../assets/images/telephoneBanner.svg";
import apple from "../assets/images/appleBanner.svg";

function HeroSuggestedProducts() {
  return (
    <section className="container mx-auto px-4 py-10">
      <header>
        <h2 className="text-2xl font-semibold text-darkBlack">
          منتجاتنا المقترحة
        </h2>
      </header>
      <main className="flex flex-col gap-14">
        <div className="flex items-center gap-40">
          <div className="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <HeroProductItem />
            <HeroProductItem />
            <HeroProductItem />
            <HeroProductItem />
            <HeroProductItem />
            <HeroProductItem />
            <HeroProductItem />
            <HeroProductItem />
          </div>
          <img src={discount} alt="discount banner" />
        </div>
        <div className="flex justify-around items-center">
          <img src={apple} alt="apple" />
          <img src={telephone} alt="telephone" />
        </div>
      </main>
    </section>
  );
}

export default HeroSuggestedProducts;
