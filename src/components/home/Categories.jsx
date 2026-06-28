import "../home/styles/Categories.css";
import { category } from "../../../data/category.js";
import {
  IoBagHandleOutline,
  IoWomanOutline,
  IoManOutline,
} from "react-icons/io5";
import { GiRunningShoe } from "react-icons/gi";
import { TiWatch } from "react-icons/ti";

const Categories = () => {
  return (
    <div className="category-section">
      <div className="category-header">
        <h3>Shop by Category </h3>
        <a href="">View All Categories ➡</a>
      </div>

      <div className="categoryImage">
        {category.map((category) => (
          <div className="category-card" key={category.id}>
            <img src={category.image} alt="category.title" />
            <h4>{category.title}</h4>
          </div>
        ))}
      </div>

      <div className="categoryIcons">
        <a href="">
          <IoWomanOutline className="woman" />
          <IoManOutline className="man" />
          <IoBagHandleOutline className="bag" />
          <GiRunningShoe className="shoe" />
          <TiWatch className="watch" />
        </a>
      </div>
    </div>
  );
};

export default Categories;
