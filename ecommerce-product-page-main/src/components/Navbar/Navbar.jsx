/* eslint-disable react/prop-types */
import Logo from "../../assets/images/logo.svg";
import CartLogo from "../../assets/images/icon-cart.svg";
import Avatar from "../../assets/images/image-avatar.png";
import NavbarIcon from "../../assets/images/icon-menu.svg";
import Cart from "../Cart/Cart";

const Navbar = ({
  cartValue,
  handleCartValue,
  showCart,
  setShowCart,
  setShowSidebar
}) => {
  return (
    <div className="grid grid-cols-12 sm:mt-5 sm:mb-0 mt-2 sm:pb-0 pb-5 border-b-2 sm:w-[80%] sm:items-start items-center sm:pl-0 pl-4">
      <img
        src={NavbarIcon}
        alt="menuIcon"
        className="sm:hidden block sm:col-span-2 cursor-pointer sm:mt-0 mt-2"
        onClick={() => {
          setShowSidebar(true);
        }}
      />

      <div className="sm:col-span-2 col-span-3 cursor-pointer justify-self-start pt-2 ">
        <img src={Logo} alt="sneakers_logo" />
      </div>
      <div className="col-span-8 sm:flex hidden gap-8 text-[#68707d] ml-4 pt-2 h-[63px]">
        <p className="cursor-pointer hover:border-b-4 border-[#ff7d1a] pb-10  hover:text-black">
          Collections
        </p>
        <p className="cursor-pointer hover:border-b-4 border-[#ff7d1a] pb-10 hover:text-black">
          Men
        </p>
        <p className="cursor-pointer hover:border-b-4 border-[#ff7d1a] pb-10 hover:text-black">
          Women
        </p>
        <p className="cursor-pointer hover:border-b-4 border-[#ff7d1a] pb-10 hover:text-black">
          About
        </p>
        <p className="cursor-pointer hover:border-b-4 border-[#ff7d1a] pb-10 hover:text-black">
          Contact
        </p>
      </div>

      <div className="flex sm:col-span-2 col-span-7 sm:gap-12 gap-5 relative sm:justify-start justify-end sm:items-start items-end">
        <div className="relative">
          <img
            src={CartLogo}
            alt="cart"
            className="w-[20px] h-[20px] cursor-pointer mt-4"
            onClick={() => {
              setShowCart(!showCart);
            }}
          />
          {cartValue !== 0 && (
            <p className="absolute rounded-xl bg-[#ff7d1a] left-3 top-2 px-[8px] py-[1px] text-white text-xs">
              {cartValue}
            </p>
          )}
        </div>
        <img
          src={Avatar}
          className="sm:w-[50px] w-[30px] sm:h-[50px] h-[30px] cursor-pointer sm:hover:border-2 border-[#ff7d1a] rounded-full"
          alt="avatar"
        />
      </div>
      <Cart
        cartValue={cartValue}
        handleCartValue={handleCartValue}
        showCart={showCart}
        setShowCart={setShowCart}
      />
    </div>
  );
};

export default Navbar;
