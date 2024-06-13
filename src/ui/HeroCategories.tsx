
import { useEffect } from "react";
import { useProductStore } from "../stores/productStore";
import CircleIconItem from "./CircleIconItem";
import HeroCategoryItem from "./HeroCategoryItem";

function HeroCategories() {
    const {productCategories,fetchProductCategories,error,isLoading}=useProductStore()
   
    
    useEffect(() => {
        fetchProductCategories();
    }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-5 bg-lightBlue p-8">
      <header>
        <h2 className="text-2xl font-semibold text-darkBlack"> store categories </h2>
      </header>
      <main className="relative grid grid-cols-4 gap-4 p-4">
        {error && <p className="text-red-500">{error}</p>}
        {isLoading && <p>Loading...</p>}
        {
            productCategories.map((category)=>(
                <HeroCategoryItem category={category} key={category}/>
            ))
        }
        <div className="absolute right-[-10px] top-[43%]">
          <CircleIconItem color="darkOrange">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 12H20.25"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.5 5.25L20.25 12L13.5 18.75"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </CircleIconItem>
        </div>
        <div className="absolute left-[-10px] top-[43%]">
          <CircleIconItem color="darkOrange">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.25 12H3.75"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.5 5.25L3.75 12L10.5 18.75"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </CircleIconItem>
        </div>
      </main>
    </section>
  );
}

export default HeroCategories;
