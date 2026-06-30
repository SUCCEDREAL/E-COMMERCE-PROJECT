import Navbar from "../components/layouts/Navbar";
import Topbar from "../components/layouts/Topbar";
import FetchApi from "../components/shop/FetchApi";
import Footer from "../components/layouts/Footer";

const Shop = () => {
  return (
    <>
      <Navbar />
      <Topbar />
      <FetchApi />
      <Footer />
    </>
  );
};

export default Shop;
