import "./styles/Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

const Header = ({ cartCount }) => {
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
          <Link to="/categories">Categories</Link>
          <Link to="/about-us">About Us</Link>
        </nav>

        <div className="nav-right">
          <div className="searchbox">
            <input type="text" placeholder="Search for product ..." />
            <FaSearch className="searchIcon" />
          </div>
        </div>

        <div className="nav-icon">
          <Link to="/signup">
            <BiUser className="navI" />
          </Link>

          {/* <a href="">
            <BiUser className="navI" />
          </a> */}

          <a href="">
            <AiOutlineHeart className="navI" />
          </a>
        </div>

        <div className="cart-icon">
          <div style={{ position: "relative", display: "inline-block" }}>
            <FiShoppingCart className="cart" />
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  width: "18px",
                  height: "18px",
                  fontSize: "11px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
