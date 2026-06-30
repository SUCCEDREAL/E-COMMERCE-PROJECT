import { useState, useEffect } from "react";
import { PiX } from "react-icons/pi";

const FetchApi = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.title} style={styles.image} />
            <h3 style={styles.title}>{product.title}</h3>
            <p style={styles.price}>${product.price}</p>
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
    gap: "18px",
    padding: "16px",
    margin: "150px 50px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "12px",
    textAlign: "center",
  },
  image: {
    height: "100px",
    objectFit: "contain",
    marginBottom: "8px",
  },
  title: {
    fontSize: "14px",
    height: "40px",
    overflow: "hidden",
    fontFamily:
      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif",
  },
  price: {
    fontWeight: "bold",
  },
};

export default FetchApi;
