/* eslint-disable react/no-unknown-property */
import React from "react";
import Carousel from "../Carousel/Carousel";
import getImgUrl from "../../utils";

const ProductPage = ({ onclickHandler, handleCartValue }) => {
  const [currentValue, setCurrentValue] = React.useState(0);

  return (
    <div className="flex flex-col sm:flex-row sm:gap-[100px] gap-8 sm:pt-[100px] pt-0 justify-center">
      <div>
        <Carousel onclickHandler={onclickHandler} />
      </div>
      <div className="flex flex-col sm:w-[35%] gap-4 sm:px-0 px-8 sm:pt-[64px]">
        <p className="uppercase text-[#ff7d1a] font-bold">Sneaker Company</p>
        <p className="font-bold text-5xl">Fall Limited Edition Sneakers</p>
        <p className="text-[#68707d] font-medium text-[18px]">
          These low-profile sneakers are the perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="flex sm:flex-col flex-row gap-4 sm:items-start items-center justify-between">
          <div className="flex gap-4 items-center">
            <p className="font-bold text-3xl">$125.00</p>
            <p className="font-semibold bg-[#ffede0] text-[#ff7d1a] px-1">
              50%
            </p>
          </div>
          <p className="text-[#b6bcc8] line-through font-bold">$250.00</p>
        </div>
        <div className="flex sm:flex-row flex-col gap-4">
          <div className="flex items-center justify-between px-4 sm:w-[40%] w-[100%] py-3 bg-[#f7f8fd] rounded-xl">
            <button
              onClick={() =>
                setCurrentValue(currentValue === 0 ? 0 : currentValue - 1)
              }
            >
              <img src={getImgUrl("icon-minus.svg")} alt="minus" />
            </button>
            <p className="font-bold">{currentValue}</p>
            <button onClick={() => setCurrentValue(currentValue + 1)}>
              <img src={getImgUrl("icon-plus.svg")} alt="plus" />
            </button>
          </div>
          <button
            onClick={() => {
              handleCartValue(currentValue);
              setCurrentValue(0);
            }}
            className="flex gap-4 py-3 rounded-xl bg-[#ff7d1a] sm:w-[60%] w-[100%] items-center justify-center text-white font-bold"
          >
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#fff"
                fillRule="nonzero"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
