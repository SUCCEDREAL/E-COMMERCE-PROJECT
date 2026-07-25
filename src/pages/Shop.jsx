import Navbar from "../components/layouts/Navbar";
import Topbar from "../components/layouts/Topbar";
import FetchApi from "../components/shop/FetchApi";
import Footer from "../components/layouts/Footer";
import { useState, useEffect } from "react";
import { getCart, saveCart } from "../../data/localStorage";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      saveCart(updatedCart);
      return updatedCart;
    });

    alert(`${product.title} added to cart!`);

    console.log("Cart:", cart);
    console.log("Cart count:", cart.length);
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Topbar />
      <FetchApi handleAddToCart={handleAddToCart} />
      <Footer />
    </>
  );
};

export default Shop;
