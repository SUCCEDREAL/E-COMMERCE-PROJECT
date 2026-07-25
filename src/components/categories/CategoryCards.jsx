import { Oval } from "react-loader-spinner";
import category from "../../../data/category";
import { useNavigate } from "react-router-dom";
import "./Categories.css";
import { useState, useEffect } from "react";

const CategoryCards = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const handleClick = (item) => {
    navigate(`/categories/${encodeURIComponent(item.category)}`);
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
    <div className="category-container">
      {category.map((item) => (
        <div className="categoryCard" key={item.id}>
          <img
            // style={{ height: "270px", width: "200px", objectFit: "350" }}
            src={item.image}
            alt={item.title}
            onClick={() => handleClick(item)}
            className="category-image"
          />
          <h2 style={{ textAlign: "center" }}>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default CategoryCards;
