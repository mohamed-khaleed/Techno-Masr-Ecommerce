import HeroProductItem from "./HeroProductItem"

function HeroBestOffers() {
  return (
    <section className="container mx-auto px-4 py-10">
      <header className="flex justify-between items-center pb-12">
        <h2 className="font-semibold text-darkBlack text-2xl">أفضل العروض</h2>
        <p className="text-darkBlue font-semibold text-[14px]">تصفح الكل</p>
      </header>
      <main className="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
         <HeroProductItem/>
         <HeroProductItem/>
         <HeroProductItem/>
         <HeroProductItem/>
         <HeroProductItem/>
         <HeroProductItem/>
         <HeroProductItem/>
         <HeroProductItem/>
      </main>
    </section>
  )
}

export default HeroBestOffers
