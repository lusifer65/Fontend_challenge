import React from "react";
import closeIcon from "../../assets/images/icon-close.svg";
const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div
      className={`${
        showSidebar ? "sm:hidden" : "hidden"
      } flex flex-col fixed h-[100vh] w-[70%] z-[9999] p-10 gap-10 bg-white top-0 left-0 items-start`}
    >
      <img
        src={closeIcon}
        alt="closeIcon"
        onClick={() => {
          setShowSidebar(false);
        }}
      />
      <div className="flex flex-col gap-7 text-xl font-bold items-start">
        <button>Collections</button>
        <button>Men</button>
        <button>Women</button>
        <button>About</button>
        <button>Contact</button>
      </div>
    </div>
  );
};

export default Sidebar;
