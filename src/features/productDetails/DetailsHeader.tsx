import { useProductStore } from "../../stores/productStore";

function DetailsHeader() {
  const { singleProduct } = useProductStore();
  return (
    <header className="ml-16">
        <ul className="flex gap-2 items-center text-[#8B96A5]">
        <li>Home</li>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-180"
        >
          <path
            d="M11.9124 15L13.0874 13.825L9.27074 10L13.0874 6.175L11.9124 5L6.9124 10L11.9124 15Z"
            fill="#8B96A5"
          />
        </svg>
        <li>shop now</li>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-180"
        >
          <path
            d="M11.9124 15L13.0874 13.825L9.27074 10L13.0874 6.175L11.9124 5L6.9124 10L11.9124 15Z"
            fill="#8B96A5"
          />
        </svg>
        <li>{singleProduct?.category}</li>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-180"
        >
          <path
            d="M11.9124 15L13.0874 13.825L9.27074 10L13.0874 6.175L11.9124 5L6.9124 10L11.9124 15Z"
            fill="#8B96A5"
          />
        </svg>
        <li className="text-darkBlue">{singleProduct?.title}</li>
      </ul>
    </header>
  )
}

export default DetailsHeader
