import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Lightbox from "./components/Lightbox/Lightbox";
import ProductPage from "./components/ProductPage/ProductPage";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [isOpen, setOpen] = React.useState(false);
  const [imageIndex, setImageIndex] = React.useState(0);
  const [cartValue, setCartValue] = React.useState(0);
  const [showCart, setShowCart] = React.useState(false);
  const [showSidebar, setShowSidebar] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const onclickHandler = (index) => {
    setImageIndex(index);
    setOpen(true);
  };

  const handleCartValue = (value, isclear = false) => {
    setCartValue(isclear ? 0 : cartValue + value);
  };

  return (
    <div className="flex flex-col justify-center items-center pb-20">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Navbar
        cartValue={cartValue}
        handleCartValue={handleCartValue}
        showCart={showCart}
        setShowCart={setShowCart}
        setShowSidebar={setShowSidebar}
      />
      <Lightbox
        isOpen={isOpen}
        isCloseIcon
        handleClose={handleClose}
        arrow
        index={imageIndex}
      />
      <ProductPage
        onclickHandler={onclickHandler}
        handleCartValue={handleCartValue}
        showCart={showCart}
      />
    </div>
  );
}

export default App;
