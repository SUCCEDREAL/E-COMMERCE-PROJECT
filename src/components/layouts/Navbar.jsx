import "./styles/Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <header className="navBar">
      <div className="navbar-content">
        <div className="logo">
          <img src={logo} alt="SUCCEDREAL" />
          <h2>SUCCEDREAL</h2>
        </div>

        <nav className="nav-link">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/category">Categories</Link>
          <Link to="/about-us">About Us</Link>
        </nav>

        <div className="nav-right">
          <div className="searchbox">
            <input type="text" placeholder="Search for product ..." />
            <FaSearch className="searchIcon" />
          </div>
        </div>

        <div className="nav-icon">
          <a href="">
            <BiUser className="navI" />
          </a>
          <a href="">
            <AiOutlineHeart className="navI" />
          </a>
        </div>

        <div className="cart-icon">
          <FiShoppingCart className="cart" />
        </div>
      </div>
    </header>
  );
};

export default Header;
