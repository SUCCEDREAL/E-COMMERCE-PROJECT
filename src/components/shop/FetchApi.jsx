import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { PiX } from "react-icons/pi";
import "../shop/Styles/Shop.css";

const FetchApi = ({ handleAddToCart }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const addToCart = (product) => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    console.log("Button clicked");
    console.log("Product:", product);

    if (!loggedInUser) {
      alert("Please sign up or log in first.");
      navigate("/signup");
      return;
    }
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // const cart = getCart();
    // console.log("Before:", cart);

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    saveCart(cart);

    console.log("After:", getCart());

    if (handleAddToCart) {
      handleAddToCart(product);
    }
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setTimeout(() => {
          setLoading(false);
        }, 50000);
      });
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
        <h3 style={{ marginTop: "20px", fontWeight: "bold" }}>
          Loading products...
        </h3>
      </div>
    );

  return (
    <>
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.title} style={styles.image} />
            <h3 style={styles.title}>{product.title}</h3>

            <div style={styles.cart} className="cart-section">
              <p style={styles.price}>${product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                style={styles.btn}
                className="shop-btn-cart"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "90px",
    padding: "16px",
    margin: "150px 50px",
    spaceBetween: "400px",
  },
  card: {
    border: "1px solid rgb(157, 104, 64)",
    borderRadius: "8px",
    padding: "12px 10px",
    textAlign: "center",
    marginTop: "25px",
    transition: "all 0.3s ease",
    boxShadow: "var(--card-shadow-hover)",
    transform: "translateY(-3px)",
    boxShadow: "0px 0px 0.5px",
  },

  image: {
    height: "230px",
    width: "230px",
    objectFit: "500px",
    marginBottom: "8px",
  },
  title: {
    fontSize: "12px",
    height: "40px",
    // overflow: "150px",
    fontFamily:
      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif",
  },
  cart: {
    display: "flex",
    gap: "15px",
    marginTop: "15px",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    // padding: "10px 30px",
  },
};

export default FetchApi;
