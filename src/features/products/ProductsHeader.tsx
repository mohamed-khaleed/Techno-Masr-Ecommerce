import offer from '../../assets/images/gradient-background-cyber-monday-sales_52683-142802 1.svg'
function ProductsHeader() {
  return (
    <header className='flex flex-col gap-5'>
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
        <li>Products</li>
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
        <li className="text-darkBlue">Services</li>
      </ul>
      <input type="text" placeholder="search for a product" className="rounded-sm m-auto w-[81rem] px-4 py-3 border border-solid border-[#E4E7E9] "/>
      <img src={offer} alt="offer" className='w-full h-[37rem] object-cover' />
    </header>
  );
}

export default ProductsHeader;
