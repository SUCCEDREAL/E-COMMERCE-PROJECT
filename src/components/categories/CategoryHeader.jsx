import React from "react";
import "../home/styles/Categories.css";

const CategoryHeader = () => {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        gap: "800px",
        margin: "0px 50px",
        marginTop: "80px",
      }}
      className="category-header"
    >
      <h3>Shop by Category </h3>
      <a
        style={{
          position: "relative",
          left: "80px",
          fontSize: "18px",
          textDecoration: "none",
        }}
        href=""
      >
        View All Categories ➡
      </a>
    </div>
  );
};

export default CategoryHeader;
