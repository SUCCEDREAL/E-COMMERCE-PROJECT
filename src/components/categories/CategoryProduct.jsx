import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Topbar from "../layouts/Topbar";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { Oval } from "react-loader-spinner";
import "../categories/styles/CategoryProduct.css";

const CategoryProducts = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        const [fakeResponse, dummyResponse] = await Promise.all([
          fetch(
            `https://fakestoreapi.com/products/category/${decodeURIComponent(category)}?limit=100`,
          ),
          fetch(
            `https://dummyjson.com/products/category/${decodeURIComponent(category)}?limit=100`,
          ),
        ]);

        const fakeData = await fakeResponse.json();
        const dummyData = await dummyResponse.json();

        // Normalize both APIs
        const fakeProducts = fakeData.map((item) => ({
          id: `fake-${item.id}`,
          title: item.title,
          price: item.price,
          image: item.image,
        }));

        const dummyProducts = dummyData.products.map((item) => ({
          id: `dummy-${item.id}`,
          title: item.title,
          price: item.price,
          image: item.thumbnail,
        }));

        setProducts([...fakeProducts, ...dummyProducts]);
      } catch (error) {
        alert("Error fetching products. Please try again later.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  // useEffect(() => {
  //   setLoading(true);

  //   fetch(
  //     `https://fakestoreapi.com/products/category/${decodeURIComponent(
  //       category,
  //     )}`,
  //     `https://dummyjson.com/products/category/${decodeURIComponent(category)}`,
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching products:", error);
  //       setLoading(false);
  //     });
  // }, [category]);

  return (
    <>
      <Topbar />
      <Navbar />

      {loading ? (
        <div
          style={{
            height: "70vh",
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
            color="#000"
            secondaryColor="#d3d3d3"
            strokeWidth={5}
            margin="300px"
          />
          <h3>Loading products...</h3>
        </div>
      ) : (
        <div className="product-results">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="category-productCard">
                <div className="fetch-image">
                  <img src={product.image} alt={product.title} width="150" />
                </div>

                <h3>{product.title}</h3>
                <div className="card-text">
                  <p>${product.price}</p>

                  <span className="cartBtnSpan">
                    <button
                      className="cartBtn"
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                      }}
                    >
                      Add to Cart
                    </button>
                  </span>
                </div>
              </div>
            ))
          ) : (
            <h2 style={{ textAlign: "center", margin: "50px 0" }}>
              No products found.
            </h2>
          )}
        </div>
      )}

      <Footer />
    </>
  );
};

export default CategoryProducts;
