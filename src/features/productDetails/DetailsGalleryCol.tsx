import { useProductStore } from "../../stores/productStore";
import CircleIconItem from "../../ui/CircleIconItem";
function DetailsGalleryCol() {
  const { singleProduct } = useProductStore();
  return (
    <div className="first-col flex flex-col  gap-16 ">
      <div className="gallery">
        <img
          src={singleProduct?.image}
          alt={singleProduct?.title}
          className="w-[15rem]  object-cover m-auto"
        />
        <div className="relative flex  items-center justify-center gap-1">
          <img
            src={singleProduct?.image}
            alt={singleProduct?.title}
            className="h-16 w-16 border-2  border-solid border-[#E4E7E9] object-cover"
          />
          <img
            src={singleProduct?.image}
            alt={singleProduct?.title}
            className="h-16 w-16 border-2  border-solid border-[#E4E7E9] object-cover"
          />
          <img
            src={singleProduct?.image}
            alt={singleProduct?.title}
            className="h-16 w-16 border-2  border-solid border-[#E4E7E9] object-cover"
          />
          <img
            src={singleProduct?.image}
            alt={singleProduct?.title}
            className="h-16 w-16 border-2  border-solid border-[#E4E7E9] object-cover"
          />
          <img
            src={singleProduct?.image}
            alt={singleProduct?.title}
            className="h-16 w-16 border-2  border-solid border-[#E4E7E9] object-cover"
          />
          <img
            src={singleProduct?.image}
            alt={singleProduct?.title}
            className="h-16 w-16 border-2  border-solid border-[#E4E7E9] object-cover"
          />
          <div className="absolute right-[-15px] top-[13%]">
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
          <div className="absolute left-[-15px] top-[13%]">
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
        </div>
      </div>

      <div className="flex flex-col gap-3 text-sm text-darkBlack ">
        <div className="flex items-center gap-2">
          <span>share product: </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12Z"
              fill="#1DA1F2"
            />
            <path
              d="M18 8.25C17.55 8.475 17.1 8.55 16.575 8.625C17.1 8.325 17.475 7.875 17.625 7.275C17.175 7.575 16.65 7.725 16.05 7.875C15.6 7.425 14.925 7.125 14.25 7.125C12.675 7.125 11.475 8.625 11.85 10.125C9.825 10.05 8.025 9.075 6.75 7.575C6.075 8.7 6.45 10.125 7.5 10.875C7.125 10.875 6.75 10.725 6.375 10.575C6.375 11.7 7.2 12.75 8.325 13.05C7.95 13.125 7.575 13.2 7.2 13.125C7.5 14.1 8.4 14.85 9.525 14.85C8.625 15.525 7.275 15.9 6 15.75C7.125 16.425 8.4 16.875 9.75 16.875C14.325 16.875 16.875 13.05 16.725 9.525C17.25 9.225 17.7 8.775 18 8.25Z"
              fill="white"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12Z"
              fill="#1877F2"
            />
            <path
              d="M18 12C18 8.7 15.3 6 12 6C8.7 6 6 8.7 6 12C6 15 8.175 17.475 11.025 17.925V13.725H9.525V12H11.025V10.65C11.025 9.15 11.925 8.325 13.275 8.325C13.95 8.325 14.625 8.475 14.625 8.475V9.975H13.875C13.125 9.975 12.9 10.425 12.9 10.875V12H14.55L14.25 13.725H12.825V18C15.825 17.55 18 15 18 12Z"
              fill="white"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12Z"
              fill="#0088CC"
            />
            <path
              d="M6.07494 11.7812C9.29616 10.3778 11.4441 9.45256 12.5189 9.00553C15.5875 7.72919 16.2251 7.50747 16.6407 7.50007C16.7322 7.49854 16.9365 7.52119 17.0689 7.62862C17.1807 7.71932 17.2115 7.84186 17.2262 7.92786C17.2409 8.01386 17.2592 8.20977 17.2447 8.36285C17.0784 10.1101 16.3588 14.3501 15.9928 16.307C15.8379 17.1351 15.5329 17.4127 15.2376 17.4399C14.596 17.4989 14.1087 17.0158 13.4872 16.6084C12.5147 15.9709 11.9653 15.5741 11.0213 14.952C9.93032 14.2331 10.6375 13.8379 11.2593 13.1922C11.422 13.0232 14.2492 10.4516 14.3039 10.2183C14.3108 10.1891 14.3171 10.0804 14.2525 10.023C14.1879 9.96553 14.0926 9.98516 14.0238 10.0008C13.9262 10.0229 12.3726 11.0498 9.36292 13.0814C8.92193 13.3842 8.5225 13.5318 8.16462 13.524C7.77009 13.5155 7.01117 13.301 6.44699 13.1176C5.755 12.8926 5.20502 12.7737 5.25291 12.3917C5.27785 12.1927 5.55186 11.9892 6.07494 11.7812Z"
              fill="white"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12Z"
              fill="#25D366"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.2 7.725C15.075 6.6 13.575 6 12 6C8.7 6 6 8.7 6 12C6 13.05 6.3 14.1 6.825 15L6 18L9.15001 17.175C10.05 17.625 11.025 17.925 12 17.925C15.3 17.925 18 15.225 18 11.925C18 10.35 17.325 8.85 16.2 7.725ZM12 16.95C11.1 16.95 10.2 16.725 9.45 16.275L9.3 16.2L7.425 16.725L7.95 14.925L7.8 14.7C7.275 13.875 7.05 12.975 7.05 12.075C7.05 9.375 9.3 7.125 12 7.125C13.35 7.125 14.55 7.65 15.525 8.55C16.5 9.525 16.95 10.725 16.95 12.075C16.95 14.7 14.775 16.95 12 16.95ZM14.7 13.2C14.55 13.125 13.8 12.75 13.65 12.75C13.5 12.675 13.425 12.675 13.35 12.825C13.275 12.975 12.975 13.275 12.9 13.425C12.825 13.5 12.75 13.5 12.6 13.5C12.45 13.425 12 13.275 11.4 12.75C10.95 12.375 10.65 11.85 10.575 11.7C10.5 11.55 10.575 11.475 10.65 11.4C10.725 11.325 10.8 11.25 10.875 11.175C10.95 11.1 10.95 11.025 11.025 10.95C11.1 10.875 11.025 10.8 11.025 10.725C11.025 10.65 10.725 9.9 10.575 9.6C10.5 9.375 10.35 9.375 10.275 9.375C10.2 9.375 10.125 9.375 9.97499 9.375C9.89999 9.375 9.74999 9.375 9.59999 9.525C9.44999 9.675 9.075 10.05 9.075 10.8C9.075 11.55 9.6 12.225 9.675 12.375C9.75 12.45 10.725 14.025 12.225 14.625C13.5 15.15 13.725 15 14.025 15C14.325 15 14.925 14.625 15 14.325C15.15 13.95 15.15 13.65 15.075 13.65C15 13.275 14.85 13.275 14.7 13.2Z"
              fill="white"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12Z"
              fill="#E60023"
            />
            <path
              d="M12 6C8.7 6 6 8.7 6 12C6 14.475 7.5 16.575 9.6 17.475C9.6 17.025 9.6 16.575 9.675 16.125C9.825 15.6 10.425 12.825 10.425 12.825C10.425 12.825 10.2 12.45 10.2 11.85C10.2 10.95 10.725 10.275 11.325 10.275C11.85 10.275 12.15 10.65 12.15 11.175C12.15 11.7 11.775 12.525 11.625 13.275C11.475 13.875 11.925 14.4 12.6 14.4C13.725 14.4 14.475 12.975 14.475 11.175C14.475 9.825 13.575 8.85 12 8.85C10.2 8.85 9.075 10.2 9.075 11.7C9.075 12.225 9.225 12.6 9.45 12.9C9.525 13.05 9.6 13.05 9.525 13.2C9.525 13.275 9.45 13.575 9.375 13.65C9.3 13.8 9.225 13.875 9.075 13.8C8.25 13.425 7.875 12.525 7.875 11.475C7.875 9.75 9.3 7.725 12.15 7.725C14.475 7.725 15.975 9.375 15.975 11.175C15.975 13.5 14.7 15.3 12.75 15.3C12.075 15.3 11.475 14.925 11.25 14.55C11.25 14.55 10.875 15.9 10.8 16.2C10.65 16.65 10.425 17.1 10.2 17.475C10.725 17.625 11.325 17.7 11.925 17.7C15.225 17.7 17.925 15 17.925 11.7C18 8.7 15.3 6 12 6Z"
              fill="white"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.75 15.75H20.25V3.75H8.25V8.25"
              stroke="#5F6C72"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.75 8.25H3.75V20.25H15.75V8.25Z"
              stroke="#5F6C72"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex items-center gap-2 ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 16.5C16.1421 16.5 19.5 13.1421 19.5 9C19.5 4.85786 16.1421 1.5 12 1.5C7.85786 1.5 4.5 4.85786 4.5 9C4.5 13.1421 7.85786 16.5 12 16.5Z"
              stroke="#FA8232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 13.5C14.4853 13.5 16.5 11.4853 16.5 9C16.5 6.51472 14.4853 4.5 12 4.5C9.51472 4.5 7.5 6.51472 7.5 9C7.5 11.4853 9.51472 13.5 12 13.5Z"
              stroke="#FA8232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 15V22.5L12 20.25L7.5 22.5V15"
              stroke="#FA8232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>one year warranty</p>
        </div>
        <div className="flex items-center gap-2 ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5 7.50002H20.4938C20.6432 7.49904 20.7894 7.54329 20.9132 7.62695C21.037 7.71061 21.1326 7.82977 21.1875 7.96877L22.5 11.25"
              stroke="#FA8232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.5 13.5H16.5"
              stroke="#FA8232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.625 20.25C18.8676 20.25 19.875 19.2426 19.875 18C19.875 16.7574 18.8676 15.75 17.625 15.75C16.3824 15.75 15.375 16.7574 15.375 18C15.375 19.2426 16.3824 20.25 17.625 20.25Z"
              stroke="#FA8232"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
            <path
              d="M6.375 20.25C7.61764 20.25 8.625 19.2426 8.625 18C8.625 16.7574 7.61764 15.75 6.375 15.75C5.13236 15.75 4.125 16.7574 4.125 18C4.125 19.2426 5.13236 20.25 6.375 20.25Z"
              stroke="#FA8232"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
            <path
              d="M15.375 18H8.625"
              stroke="#FA8232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.125 18H2.25C2.05109 18 1.86032 17.921 1.71967 17.7803C1.57902 17.6397 1.5 17.4489 1.5 17.25V6.75C1.5 6.55109 1.57902 6.36032 1.71967 6.21967C1.86032 6.07902 2.05109 6 2.25 6H16.5V16.05"
              stroke="#FA8232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 11.25H22.5V17.25C22.5 17.4489 22.421 17.6397 22.2803 17.7803C22.1397 17.921 21.9489 18 21.75 18H19.875"
              stroke="#FA8232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>free and fast delivery</p>
        </div>
        <div className="flex items-center gap-2 ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5656 11.4187L20.25 12.5718L17.25 6.83432L19.5938 5.66245C19.7679 5.57366 19.9701 5.55734 20.1563 5.61706C20.3425 5.67677 20.4975 5.80766 20.5875 5.9812L22.8937 10.3968C22.9405 10.4852 22.9691 10.5821 22.9779 10.6817C22.9867 10.7813 22.9755 10.8817 22.9449 10.9769C22.9143 11.0721 22.865 11.1602 22.7999 11.2361C22.7348 11.312 22.6551 11.3741 22.5656 11.4187V11.4187Z"
              stroke="#FA8232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.74984 12.4781L1.43422 11.3156C1.34506 11.2719 1.26559 11.2107 1.20055 11.1357C1.13551 11.0607 1.08622 10.9734 1.05561 10.8789C1.02499 10.7844 1.01369 10.6848 1.02236 10.5859C1.03103 10.487 1.05951 10.3908 1.10609 10.3031L3.41234 5.88749C3.50256 5.71408 3.65691 5.58275 3.84253 5.52146C4.02814 5.46017 4.23035 5.47377 4.40609 5.55937L6.74984 6.73124L3.74984 12.4781Z"
              stroke="#FA8232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.25 12.5719L18.75 14.3344L15.3 17.7844C15.206 17.8723 15.092 17.9362 14.968 17.9704C14.8439 18.0047 14.7133 18.0085 14.5875 17.9813L9.15 16.6219C9.05067 16.5942 8.95812 16.5463 8.87812 16.4813L3.75 12.4781"
              stroke="#FA8232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.7501 14.3344L14.6251 11.3344L13.4251 12.2344C12.9052 12.6224 12.2738 12.832 11.6251 12.832C10.9763 12.832 10.345 12.6224 9.82508 12.2344L9.31883 11.85C9.23323 11.7849 9.16242 11.7024 9.1111 11.6079C9.05978 11.5134 9.02911 11.409 9.02113 11.3018C9.01316 11.1946 9.02805 11.0868 9.06483 10.9858C9.1016 10.8847 9.15942 10.7926 9.23446 10.7156L12.9095 7.04998C12.9785 6.98129 13.0604 6.92688 13.1505 6.88988C13.2406 6.85288 13.3371 6.83401 13.4345 6.83436H17.2501"
              stroke="#FA8232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.80615 6.73121L11.6155 5.32496C11.7864 5.27595 11.9692 5.28924 12.1312 5.36246L15.3749 6.83433"
              stroke="#FA8232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5 19.9594L7.67813 19.2469C7.56313 19.2209 7.45666 19.166 7.36875 19.0875L5.25 17.25"
              stroke="#FA8232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>you can return your product easily</p>
        </div>
        <div className="flex items-center gap-2 ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.1406 12.7499H18.1406C17.7428 12.7499 17.3613 12.908 17.08 13.1893C16.7987 13.4706 16.6406 13.8521 16.6406 14.2499V17.9999C16.6406 18.3978 16.7987 18.7793 17.08 19.0606C17.3613 19.3419 17.7428 19.4999 18.1406 19.4999H19.6406C20.0384 19.4999 20.42 19.3419 20.7013 19.0606C20.9826 18.7793 21.1406 18.3978 21.1406 17.9999V12.7499ZM21.1406 12.7499C21.1407 11.5617 20.9054 10.3852 20.4484 9.28838C19.9915 8.19154 19.3218 7.19604 18.4781 6.35932C17.6344 5.52261 16.6334 4.86124 15.5328 4.41338C14.4322 3.96553 13.2538 3.74004 12.0656 3.74995C10.8782 3.74129 9.70083 3.96769 8.60132 4.4161C7.5018 4.86452 6.50189 5.52608 5.6592 6.36267C4.81651 7.19926 4.1477 8.19434 3.69131 9.29057C3.23492 10.3868 2.99997 11.5625 3 12.7499V17.9999C3 18.3978 3.15804 18.7793 3.43934 19.0606C3.72064 19.3419 4.10218 19.4999 4.5 19.4999H6C6.39782 19.4999 6.77936 19.3419 7.06066 19.0606C7.34196 18.7793 7.5 18.3978 7.5 17.9999V14.2499C7.5 13.8521 7.34196 13.4706 7.06066 13.1893C6.77936 12.908 6.39782 12.7499 6 12.7499H3"
              stroke="#FA8232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>customer support 24/7</p>
        </div>
        <div className="flex items-center gap-2 ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 5.25H3C2.58579 5.25 2.25 5.58579 2.25 6V18C2.25 18.4142 2.58579 18.75 3 18.75H21C21.4142 18.75 21.75 18.4142 21.75 18V6C21.75 5.58579 21.4142 5.25 21 5.25Z"
              stroke="#FA8232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.75 15.75H18.75"
              stroke="#FA8232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.25 15.75H12.75"
              stroke="#FA8232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.25 9.08435H21.75"
              stroke="#FA8232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>support pay with various ways</p>
        </div>
      </div>
    </div>
  );
}

export default DetailsGalleryCol;
