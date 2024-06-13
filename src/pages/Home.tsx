import { useEffect } from "react";
import { useProductStore } from "../stores/productStore";
import HeroBanner from "../ui/HeroBanner";
import HeroBestOffers from "../ui/HeroBestOffers";
import HeroCategories from "../ui/HeroCategories";
import HeroGallery from "../ui/HeroGallery";
import HeroServices from "../ui/HeroServices";
import HeroSuggestedProducts from "../ui/HeroSuggestedProducts";
import HeroSuggestedProductsB from "../ui/HeroSuggestedProductsB";
import Navbar from "../features/navbar/Navbar";
import Footer from "../ui/Footer";

const Home: React.FC = () => {
  const { fetchEightProducts } = useProductStore();
  useEffect(() => {
    fetchEightProducts();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroGallery />
        <HeroServices />
        <HeroBestOffers />
        <HeroCategories />
        <HeroSuggestedProducts />
        <HeroSuggestedProductsB />
        <HeroBanner />
      </main>
      <Footer />
    </>
  );
};

export default Home;
