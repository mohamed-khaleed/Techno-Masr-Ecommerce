function CartHeader() {
  return (
    <header >
      <ul className="flex items-center gap-2 text-[#8B96A5]">
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
        <li className="text-darkBlue">shopping cart</li>
      </ul>
    </header>
  );
}

export default CartHeader;
