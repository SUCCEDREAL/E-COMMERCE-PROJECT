import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import "../home/styles/Product.css";

function Productcard({ product, onAddToCart, onWishlist }) {
  const [wished, setWished] = useState(false);
  const handleWishlistClick = () => {
    setWished(!wished);
    onWishlist(product);
  };
  return (
    <>
      <div className="product-card-section">
        <div className="product-image">
          {product.badge && (
            <span className="product-badge">{product.badge}</span>
          )}
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        </div>

        <div className="product-info">
          <h4>{product.name}</h4>

          <div className="price-row">
            <span className="price">{product.price}</span>
            {product.oldPrice && (
              <span className="old-price">{product.oldPrice}</span>
            )}
          </div>

          <div className="product-btn" onClick={handleWishlistClick}>
            {wished ? <FaHeart style={{ color: "#e05050" }} /> : <FaRegHeart />}
            <button
              className="add-cart-btn"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productcard;
