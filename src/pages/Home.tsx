import HeroBanner from "../ui/HeroBanner"
import HeroBestOffers from "../ui/HeroBestOffers"
import HeroCategories from "../ui/HeroCategories"
import HeroGallery from "../ui/HeroGallery"
import HeroServices from "../ui/HeroServices"
import HeroSuggestedProducts from "../ui/HeroSuggestedProducts"
import HeroSuggestedProductsB from "../ui/HeroSuggestedProductsB"

const Home: React.FC = () =>  {
  return (
    <main>
      <HeroGallery/>
      <HeroServices/>
      <HeroBestOffers/>
      <HeroCategories/>
      <HeroSuggestedProducts/>
      <HeroSuggestedProductsB/>
      <HeroBanner/>
    </main>
  )
}

export default Home
