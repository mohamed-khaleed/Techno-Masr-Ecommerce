import tv from "../../assets/images/tv.svg";

function CartTable() {
  return (
    <div className="relative my-7 h-full w-[56rem] overflow-x-auto rounded-sm border-2 border-solid  border-lightGrey">
      <h2 className="p-5 text-lg font-medium text-darkBlack">shopping cart</h2>
      <table className="w-full table-auto text-left text-sm  rtl:text-right ">
        <thead className="bg-lightBlue text-xs  font-medium capitalize text-[#475156] ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              price
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              total price
            </th>
          </tr>
        </thead>
        <tbody className="border-b-[1px] border-solid border-lightGrey">
          <tr className="bg-white text-sm text-darkBlack ">
            <th scope="row" className="whitespace-nowrap px-6 py-4 ">
              <div className="flex items-center justify-around">
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                      stroke="#929FA5"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M15 9L9 15"
                      stroke="#929FA5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 15L9 9"
                      stroke="#929FA5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <img className="h-[4.5rem] w-[4.5rem]" src={tv} alt="product" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  sed.
                </p>
              </div>
            </th>
            <td className="px-6 py-4 font-medium">555</td>
            <td>
              <div className="flex h-[3rem] w-[9.375] items-center justify-around rounded-sm border-[2px] border-solid border-lightGrey   text-[#475156]">
                <span className="cursor-pointer text-xl">+</span>
                <span>01</span>
                <span className="cursor-pointer text-2xl">-</span>
              </div>
            </td>
            <td className="px-6 py-4">$2999</td>
          </tr>
        </tbody>
        <div className=" flex items-center  justify-around py-4 ">
          <button className="border-2 border-solid border-darkBlue px-6 py-2 font-bold text-darkBlue">
            update cart
          </button>
          <p className="text-sm font-bold text-darkBlue">continue shopping</p>
        </div>
      </table>
    </div>
  );
}

export default CartTable;
