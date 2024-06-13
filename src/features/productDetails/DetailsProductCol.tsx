"use client"
import { useState } from "react";
import { useAuthStore } from "../../stores/authStore";
import { useCartStore } from "../../stores/cartStore";
import { useProductStore } from "../../stores/productStore";
import Button from "../../ui/Button";

function DetailsProductCol() {
  const [count, setCount] = useState<number>(1);
  const { singleProduct } = useProductStore();
  const { user } = useAuthStore();
  const { addProductToCart } = useCartStore();
  if (!singleProduct) return null;
  const handleAddToCart = async () => {
    if (!user) {
      alert('You must be logged in to add products to the cart.');
      return;
    }
    try {
      await addProductToCart(user.id, [{ productId: singleProduct.id, quantity: count }]);
      alert('Product added to cart successfully!');
    } catch (error) {
      console.error('Failed to add product to cart:', error);
      alert('Failed to add product to cart.');
    }
  };
  const handleIncrease = () => {
    if (count < 10) { 
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="second-col flex flex-col gap-6">
      <div className="flex gap-2">
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3439 14.8985L14.2814 17.3985C14.7892 17.7188 15.4142 17.2422 15.2657 16.6563L14.1251 12.1719C14.0943 12.0476 14.0992 11.9171 14.1393 11.7955C14.1793 11.6738 14.253 11.566 14.3517 11.4844L17.8829 8.53908C18.3439 8.15627 18.1095 7.38283 17.5079 7.34377L12.8986 7.04689C12.7728 7.03958 12.6519 6.99578 12.5506 6.92086C12.4493 6.84594 12.372 6.74314 12.3282 6.62502L10.6095 2.29689C10.564 2.17182 10.4811 2.06377 10.3721 1.98742C10.2631 1.91107 10.1332 1.87012 10.0001 1.87012C9.86702 1.87012 9.73715 1.91107 9.62814 1.98742C9.51912 2.06377 9.43624 2.17182 9.39074 2.29689L7.67199 6.62502C7.62819 6.74314 7.55092 6.84594 7.44964 6.92086C7.34836 6.99578 7.22745 7.03958 7.10168 7.04689L2.49231 7.34377C1.89074 7.38283 1.65637 8.15627 2.11731 8.53908L5.64856 11.4844C5.74726 11.566 5.82089 11.6738 5.86097 11.7955C5.90106 11.9171 5.90596 12.0476 5.87512 12.1719L4.82043 16.3281C4.64074 17.0313 5.39074 17.6016 5.99231 17.2188L9.65637 14.8985C9.75912 14.8331 9.87836 14.7984 10.0001 14.7984C10.1219 14.7984 10.2411 14.8331 10.3439 14.8985Z"
              fill="#FA8232"
            />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3439 14.8985L14.2814 17.3985C14.7892 17.7188 15.4142 17.2422 15.2657 16.6563L14.1251 12.1719C14.0943 12.0476 14.0992 11.9171 14.1393 11.7955C14.1793 11.6738 14.253 11.566 14.3517 11.4844L17.8829 8.53908C18.3439 8.15627 18.1095 7.38283 17.5079 7.34377L12.8986 7.04689C12.7728 7.03958 12.6519 6.99578 12.5506 6.92086C12.4493 6.84594 12.372 6.74314 12.3282 6.62502L10.6095 2.29689C10.564 2.17182 10.4811 2.06377 10.3721 1.98742C10.2631 1.91107 10.1332 1.87012 10.0001 1.87012C9.86702 1.87012 9.73715 1.91107 9.62814 1.98742C9.51912 2.06377 9.43624 2.17182 9.39074 2.29689L7.67199 6.62502C7.62819 6.74314 7.55092 6.84594 7.44964 6.92086C7.34836 6.99578 7.22745 7.03958 7.10168 7.04689L2.49231 7.34377C1.89074 7.38283 1.65637 8.15627 2.11731 8.53908L5.64856 11.4844C5.74726 11.566 5.82089 11.6738 5.86097 11.7955C5.90106 11.9171 5.90596 12.0476 5.87512 12.1719L4.82043 16.3281C4.64074 17.0313 5.39074 17.6016 5.99231 17.2188L9.65637 14.8985C9.75912 14.8331 9.87836 14.7984 10.0001 14.7984C10.1219 14.7984 10.2411 14.8331 10.3439 14.8985Z"
              fill="#FA8232"
            />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3439 14.8985L14.2814 17.3985C14.7892 17.7188 15.4142 17.2422 15.2657 16.6563L14.1251 12.1719C14.0943 12.0476 14.0992 11.9171 14.1393 11.7955C14.1793 11.6738 14.253 11.566 14.3517 11.4844L17.8829 8.53908C18.3439 8.15627 18.1095 7.38283 17.5079 7.34377L12.8986 7.04689C12.7728 7.03958 12.6519 6.99578 12.5506 6.92086C12.4493 6.84594 12.372 6.74314 12.3282 6.62502L10.6095 2.29689C10.564 2.17182 10.4811 2.06377 10.3721 1.98742C10.2631 1.91107 10.1332 1.87012 10.0001 1.87012C9.86702 1.87012 9.73715 1.91107 9.62814 1.98742C9.51912 2.06377 9.43624 2.17182 9.39074 2.29689L7.67199 6.62502C7.62819 6.74314 7.55092 6.84594 7.44964 6.92086C7.34836 6.99578 7.22745 7.03958 7.10168 7.04689L2.49231 7.34377C1.89074 7.38283 1.65637 8.15627 2.11731 8.53908L5.64856 11.4844C5.74726 11.566 5.82089 11.6738 5.86097 11.7955C5.90106 11.9171 5.90596 12.0476 5.87512 12.1719L4.82043 16.3281C4.64074 17.0313 5.39074 17.6016 5.99231 17.2188L9.65637 14.8985C9.75912 14.8331 9.87836 14.7984 10.0001 14.7984C10.1219 14.7984 10.2411 14.8331 10.3439 14.8985Z"
              fill="#FA8232"
            />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3439 14.8985L14.2814 17.3985C14.7892 17.7188 15.4142 17.2422 15.2657 16.6563L14.1251 12.1719C14.0943 12.0476 14.0992 11.9171 14.1393 11.7955C14.1793 11.6738 14.253 11.566 14.3517 11.4844L17.8829 8.53908C18.3439 8.15627 18.1095 7.38283 17.5079 7.34377L12.8986 7.04689C12.7728 7.03958 12.6519 6.99578 12.5506 6.92086C12.4493 6.84594 12.372 6.74314 12.3282 6.62502L10.6095 2.29689C10.564 2.17182 10.4811 2.06377 10.3721 1.98742C10.2631 1.91107 10.1332 1.87012 10.0001 1.87012C9.86702 1.87012 9.73715 1.91107 9.62814 1.98742C9.51912 2.06377 9.43624 2.17182 9.39074 2.29689L7.67199 6.62502C7.62819 6.74314 7.55092 6.84594 7.44964 6.92086C7.34836 6.99578 7.22745 7.03958 7.10168 7.04689L2.49231 7.34377C1.89074 7.38283 1.65637 8.15627 2.11731 8.53908L5.64856 11.4844C5.74726 11.566 5.82089 11.6738 5.86097 11.7955C5.90106 11.9171 5.90596 12.0476 5.87512 12.1719L4.82043 16.3281C4.64074 17.0313 5.39074 17.6016 5.99231 17.2188L9.65637 14.8985C9.75912 14.8331 9.87836 14.7984 10.0001 14.7984C10.1219 14.7984 10.2411 14.8331 10.3439 14.8985Z"
              fill="#FA8232"
            />
          </svg>
        </div>
        <span className="font-semibold text-darkBlack">{singleProduct.rating?.rate} overall rating</span>
        <span className="text-sm text-lightBlack">
          ({singleProduct.rating?.count} customer ratings and reviews)
        </span>
      </div>
      <h2 className="text-xl text-darkBlack">
        {singleProduct.title}
      </h2>
      <p className="text-sm font-semibold text-lightBlack">
        availability:{" "}
        <span className="text-sm font-semibold text-darkGreen">available</span>
      </p>
      <p className="text-sm font-semibold text-lightBlack">
        category:{" "}
        <span className="text-sm font-semibold text-darkBlack">{singleProduct.category}</span>
      </p>
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold text-[#1B6392]">{Math.ceil(singleProduct.price) } EG Pound</p>
        <p className="text-lg text-[#77878F]">Includes VAT</p>
      </div>
      <div className="h-[1px] w-full rounded bg-lightGrey"></div>
      <div>
        <label className="text-sm text-darkBlack" htmlFor="select1">
          size
        </label>
        <select
          name="select1"
          id="select1"
          className="h-[44px]  w-full rounded-sm border-[1px] border-solid border-lightGrey px-4"
        >
          <option value="1">option 1</option>
          <option value="1">option 2</option>
          <option value="1">option 3</option>
          <option value="1">option 4</option>
        </select>
      </div>
      <div className="flex items-center justify-between ">
        <div className="flex items-center rounded-sm border-[2px] border-solid border-lightGrey px-5 py-4  text-[#475156]">
          <span className="mr-3 cursor-pointer" onClick={handleIncrease}>+</span>
          <span>{count}</span>
          <span className="ml-3 cursor-pointer" onClick={handleDecrease}>-</span>
        </div>
        <div>
          <button className="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.625 7.49803 3.01546 6.40585 3.72996 5.53431C4.44445 4.66277 5.43884 4.0657 6.54393 3.84468C7.64903 3.62366 8.79657 3.79235 9.79131 4.32204C10.7861 4.85174 11.5665 5.70972 12 6.75001C12.4335 5.70972 13.2139 4.85174 14.2087 4.32204C15.2034 3.79235 16.351 3.62366 17.4561 3.84468C18.5612 4.0657 19.5555 4.66277 20.27 5.53431C20.9845 6.40585 21.375 7.49803 21.375 8.62501C21.375 15 12 20.25 12 20.25Z"
                stroke="#475156"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm text-[#475156]">Add to favorites</span>
          </button>
        </div>
      </div>
      <Button onClick={handleAddToCart}>
        Add to cart
        <span>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.75 20.25C8.75 20.6642 8.41421 21 8 21C7.58579 21 7.25 20.6642 7.25 20.25C7.25 19.8358 7.58579 19.5 8 19.5C8.41421 19.5 8.75 19.8358 8.75 20.25Z"
              fill="white"
              stroke="white"
              strokeWidth="1.5"
            />
            <path
              d="M18.5 20.25C18.5 20.6642 18.1642 21 17.75 21C17.3358 21 17 20.6642 17 20.25C17 19.8358 17.3358 19.5 17.75 19.5C18.1642 19.5 18.5 19.8358 18.5 20.25Z"
              fill="white"
              stroke="white"
              strokeWidth="1.5"
            />
            <path
              d="M4.46562 6.75H21.2844L18.8094 15.4125C18.7211 15.7269 18.532 16.0036 18.2711 16.2C18.0103 16.3965 17.6922 16.5019 17.3656 16.5H8.38437C8.05783 16.5019 7.7397 16.3965 7.47886 16.2C7.21803 16.0036 7.02893 15.7269 6.94062 15.4125L3.54688 3.54375C3.50203 3.38696 3.4073 3.24905 3.27704 3.15093C3.14677 3.05282 2.98808 2.99983 2.825 3H1.25"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Button>
      <button className="text-darkOrange border-solid border-2 border-darkOrange h-14 w-full">
        buy now
      </button>
    </div>
  );
}

export default DetailsProductCol;
