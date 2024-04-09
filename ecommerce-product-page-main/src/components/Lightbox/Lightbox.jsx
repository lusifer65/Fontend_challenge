/* eslint-disable react/prop-types */
import React from "react";
import Carousel from "../Carousel/Carousel";

const Lightbox = ({
  isOpen,
  isCloseIcon = false,
  handleClose = () => {},
  arrow,
  index
}) => {
  const [hoverColor, setColor] = React.useState(false);

  return (
    <div
      className={`${
        isOpen ? "sm:flex" : ""
      } hidden justify-center items-center w-[100%] h-[100vh] bg-[#0000005f] fixed top-0 z-50`}
    >
      <div className="flex flex-col gap-4">
        <svg
          onMouseEnter={() => setColor(true)}
          onMouseLeave={() => setColor(false)}
          width="14"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
          className={`self-end ${isCloseIcon ? "sm:block" : ""} hidden`}
          onClick={handleClose}
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill={hoverColor ? "#ff7d1a" : "#fff"}
          />
        </svg>
        <Carousel arrow={arrow} index={index} />
      </div>
    </div>
  );
};

export default Lightbox;
