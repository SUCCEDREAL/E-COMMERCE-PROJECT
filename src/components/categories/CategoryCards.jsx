import category from "../../../data/category";
import { useNavigate } from "react-router-dom";
import "./Categories.css";

const CategoryCards = () => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/categories/${encodeURIComponent(item.category)}`);
  };

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

// import { useState, useEffect } from "react";

// import category from "../../../data/category";

// const CategoryCards = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [categoryCardsData, setCategoryCardsData] = useState([]);

//   const handleClick = (item) => {
//     console.log("CLICKED:", item);
//     setSelectedCategory(item.category);
//   };

//   useEffect(() => {
//     if (!selectedCategory) return;
//     fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("FETCHED DATA:", data);
//         setCategoryCardsData(data);
//       })
//       .catch((error) => console.error("Error fetching category data:", error));
//   }, [selectedCategory]);

//   return (
//     <div>
//       <div className="category-container">
//         {category.map((item) => (
//           <div className="categoryCard" key={item.id}>
//             <p>
//               Selected: {selectedCategory} | Products:{" "}
//               {categoryCardsData.length}
//             </p>
//             <img
//               src={item.image}
//               alt={item.title}
//               onClick={() => handleClick(item)}
//             />
//             <h2>{item.title}</h2>
//           </div>
//         ))}
//       </div>

//       {categoryCardsData.length > 0 && (
//         <div className="product-results">
//           {categoryCardsData.map((product) => (
//             <div key={product.id} className="productCard">
//               <img src={product.image} alt={product.title} />
//               <p>{product.title}</p>
//               <p>${product.price}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CategoryCards;
