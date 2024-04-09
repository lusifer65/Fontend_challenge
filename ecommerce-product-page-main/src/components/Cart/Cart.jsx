import React from "react";
import productImage from "../../assets/images/image-product-1-thumbnail.jpg";
import DeleteIcon from "../../assets/images/icon-delete.svg";
const Cart = ({ cartValue, handleCartValue, showCart, setShowCart }) => {
  if (!showCart) {
    return null;
  }
  return (
    <div className="absolute top-[80px] sm:w-[400px] w-[90%] sm:right-24 right-5 bg-white shadow-xl h-[250px] rounded-xl z-[1000]">
      <p className="border-b-2 p-5 font-bold text-xl">Cart</p>
      {cartValue === 0 ? (
        <div className="flex items-center justify-center h-[150px] font-bold text-[#b6bcc8]">
          Your cart is Empty
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex p-6 gap-5 justify-between items-center text-[#68707d] ">
            <img
              src={productImage}
              alt="productImage"
              className="w-[80px] rounded-xl"
            />
            <div className="">
              <p className="">Fall Limited Edition Sneakers</p>
              <div className="flex gap-2">
                <span>$125.00 x {cartValue}</span>
                <span className="text-black font-bold">
                  ${cartValue * 125}.00
                </span>
              </div>
            </div>
            <img
              src={DeleteIcon}
              alt="deleteIcon"
              onClick={() => {
                handleCartValue(0, true);
                setShowCart(false);
              }}
            />
          </div>
          <div
            className="mx-6 text-center bg-[rgb(255,125,26)] text-white font-bold py-2 rounded-xl cursor-pointer"
            onClick={() => {
              handleCartValue(0, true);
              setShowCart(false);
            }}
          >
            <button>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
