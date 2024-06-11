import HeroProductItem from "../../ui/HeroProductItem";

function ProductsBody() {
  return (
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
  );
}

export default ProductsBody;
