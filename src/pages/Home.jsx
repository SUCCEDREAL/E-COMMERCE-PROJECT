import { Oval } from "react-loader-spinner";
import { useState, useEffect } from "react";
import Topbar from "../components/layouts/Topbar";
import Navbar from "../components/layouts/Navbar";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Productcard from "../components/categories/Productcard";
import product from "../../data/product";
import ProductHeader from "../components/home/ProductHeader";
import NewsLetter from "../components/home/NewsLetter";
import Footer from "../components/layouts/Footer";

const Home = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleAddToCart = (p) => {
    setCart((prev) => [...prev, p]);
    alert(`${p.name} added to cart!`);
  };

  const handleWishlist = (p) => {
    setWishlist((prev) => [...prev, p]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <Oval
          visible={true}
          height={90}
          width={100}
          color="rgb(157, 104, 64)"
          secondaryColor="#d86868"
          strokeWidth={5}
          margin="300px"
        />
        <h3 style={{ marginTop: "20px", fontWeight: "bold" }}>Loading ...</h3>
      </div>
    );

  return (
    <>
      <Topbar />
      <Navbar cartCount={cart.length} />
      <Hero />
      <Features />
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
