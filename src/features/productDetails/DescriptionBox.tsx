import { useProductStore } from "../../stores/productStore";

function DescriptionBox() {
  const { singleProduct } = useProductStore();
  return (
    <div className="border- border-soled flex justify-around rounded border-[2px] border-lightGrey">
      <div className="first-col flex flex-col  gap-2 px-3 pb-10 pt-3">
        <span>general information</span>
        <div className="bg-darkOrange h-[2px] w-full rounded"></div>
        <span>additional information</span>
        <span>Specifications</span>
        <span>rating</span>
      </div>
      <div className="second-col flex flex-col  gap-2 px-3 pb-10 pt-3">
        <h3>description</h3>
        <p>
          {singleProduct?.description}
        </p>
      </div>
      <div className="third-col flex flex-col  gap-2 border-l-2 border-solid border-lightGrey px-3 pb-10 pt-3  ">
        <h3 className="font-semibold text-darkBlack ">
          product delivery details
        </h3>
        <p className="text-sm font-medium text-darkBlack">
          Delivery representative:{" "}
          <span className="text-sm text-lightBlack">
            {" "}
            2 - 4 days, free shipping
          </span>
        </p>
        <p className="text-sm font-medium text-darkBlack">
          Local Delivery:{" "}
          <span className="text-sm text-lightBlack">
            {" "}
            Up to one week, 20 SAR
          </span>
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
