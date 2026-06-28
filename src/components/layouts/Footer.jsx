import "../layouts/styles/Footer.css";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaRegCopyright,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        {/* social media platform */}
        <div className="social-media">
          <h2>SUCCEDREAL</h2>
          <p>
            Timeless style. Premium quality <br />
            Designed for you
          </p>
          <div className="social-icon">
            {<FaInstagram />}
            {<FaFacebookF />}
            <FaTwitter />
          </div>
        </div>

        {/* shop */}
        <div className="shop">
          <h3>Shop</h3>
          <p>All Products</p>
          <p>New Arrivals</p>
          <p>Best Sellers</p>
          <p>Deals</p>
        </div>

        {/* Customer Service */}
        <div className="customer-service">
          <h3>Customer Service</h3>
          <p>Contact Us</p>
          <p>Shopping & Delivery</p>
          <p>Returns & Exchanges</p>
          <p>FAQ</p>
        </div>

        {/* company section */}
        <div className="Company-section">
          <h3>Company</h3>
          <p>About Us</p>
          <p>Our Story</p>
          <p>Careers</p>
          <p>Press</p>
        </div>

        {/* legal section */}
        <div className="legal">
          <h3>Legal</h3>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Cookie Policy</p>
        </div>
      </div>

      <div className="copyright">
        <p>
          {" "}
          <span className="icon">
            <FaRegCopyright />
          </span>{" "}
          2026 SUCCEDREAL. All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
