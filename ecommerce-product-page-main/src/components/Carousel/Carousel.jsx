/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { getImgurl } from "../../utils";

const Carousel = ({ arrow, onclickHandler, index = 0 }) => {
  const [currentImage, setCurrrentImage] = React.useState(index);
  const [hoverLeft, setLeftColor] = React.useState(false);
  const [hoverRight, setRightColor] = React.useState(false);
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(innerWidth <= 540);
  }, [isMobile]);
  return (
    <div className="flex flex-col gap-6">
      <div className="sm:w-[470px]">
        <div className="relative">
          {(arrow || isMobile) && (
            <svg
              width="12"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-[45%] bg-white sm:left-[-25px] left-4 w-[50px] h-[50px] p-4 rounded-full"
              onClick={() =>
                setCurrrentImage(currentImage == 0 ? 3 : currentImage - 1)
              }
              onMouseEnter={() => setLeftColor(true)}
              onMouseLeave={() => setLeftColor(false)}
            >
              <path
                d="M11 1 3 9l8 8"
                stroke={hoverLeft ? "#ff7d1a" : "#000"}
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          )}
          <img
            src={getImgurl(`image-product-${currentImage + 1}.jpg`)}
            alt=""
            className="w-[100%] sm:rounded-xl"
            onClick={() => {
              onclickHandler(currentImage);
            }}
          />
          {(arrow || isMobile) && (
            <svg
              width="12"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-[45%] bg-white sm:right-[-24px] right-4 w-[50px] h-[50px] p-4 rounded-full"
              onClick={() => setCurrrentImage((currentImage + 1) % 4)}
              onMouseEnter={() => setRightColor(true)}
              onMouseLeave={() => setRightColor(false)}
            >
              <path
                d="m2 1 8 8-8 8"
                stroke={hoverRight && !isMobile ? "#ff7d1a" : "#000"}
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
      <div className="sm:flex hidden gap-5 justify-center">
        {[0, 1, 2, 3].map((item) => {
          return (
            <img
              className={`w-[100px] hover:brightness-115 hover:contrast-10${
                item === currentImage
                  ? "border-2 border-[#ff7d1a] brightness-110"
                  : ""
              } rounded-xl`}
              src={getImgurl(`image-product-${item + 1}-thumbnail.jpg`)}
              key={item}
              onClick={() => setCurrrentImage(item)}
              alt={`thumbnail-${item + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
