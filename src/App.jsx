import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Categories from "./pages/Categories.jsx";
import CategoryProducts from "./components/categories/CategoryProduct.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Signup from "./pages/Signup.jsx";
import UserLogin from "./pages/UserLogin.jsx";
import Welcome from "./pages/Welcome.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category" element={<CategoryProducts />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
