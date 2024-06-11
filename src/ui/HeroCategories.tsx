import CircleIconItem from "./CircleIconItem";
import HeroCategoryItem from "./HeroCategoryItem";

function HeroCategories() {
  return (
    <section className="flex flex-col items-center justify-center gap-5 bg-lightBlue p-8">
      <header>
        <h2 className="text-2xl font-semibold text-darkBlack">أقسام المتجر</h2>
      </header>
      <main className="relative grid gap-4 p-4 grid-cols-4">
        <HeroCategoryItem category="مستلزمات رياضية" />
        <HeroCategoryItem category="مستلزمات رياضية" />
        <HeroCategoryItem category="مستلزمات رياضية" />
        <HeroCategoryItem category="مستلزمات رياضية" />
        <div className="absolute top-[43%] right-[-10px]">
        <CircleIconItem  color="orange">
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
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.5 5.25L20.25 12L13.5 18.75"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </CircleIconItem>
        </div>
        <div className="absolute top-[43%] left-[-10px]">
       <CircleIconItem color="orange">
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
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.5 5.25L3.75 12L10.5 18.75"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </CircleIconItem>
        </div>
      </main>
    </section>
  );
}

export default HeroCategories;
