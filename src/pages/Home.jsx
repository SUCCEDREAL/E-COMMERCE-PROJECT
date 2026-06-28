import { useState } from "react";
import Topbar from "../components/layouts/Topbar";
import Navbar from "../components/layouts/Navbar";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Categories from "../components/home/Categories";
import Productcard from "../components/home/Productcard";
import product from "../../data/product";
import ProductHeader from "../components/home/ProductHeader";
import NewsLetter from "../components/home/NewsLetter";
import Footer from "../components/layouts/Footer";

const Home = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handleAddToCart = (p) => {
    setCart((prev) => [...prev, p]);
    alert(`${p.name} added to cart!`);
  };

  const handleWishlist = (p) => {
    setWishlist((prev) => [...prev, p]);
  };

  return (
    <>
      <Topbar />
      <Navbar cartCount={cart.length} />
      <Hero />
      <Features />
      <Categories />
      <ProductHeader />
      <div className="product-list">
        {product.map((p) => (
          <Productcard
            key={p.id}
            product={p}
            onAddToCart={handleAddToCart}
            onWishlist={handleWishlist}
          />
        ))}
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
