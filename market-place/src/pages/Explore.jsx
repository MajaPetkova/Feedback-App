import { Link } from "react-router-dom";
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";

export const Explore = () => {
  return (
    <div className="explore-container">
      <header>
        <p className="header">Explore</p>
      </header>
      <main>
        <p className="exploreCategoryHeading">Categories</p>
        <div className="exploreCategories">
            <Link to="/category/rent">
                <img src={rentCategoryImage} alt="rent-img"  className="explore-img"/>
                <p className="explore-name">Places for rent</p>
            </Link>
            <Link to="/category/sale">
                <img src={sellCategoryImage} alt="sale-img" className="explore-img" />
                <p className="explore-name">Places for sale</p>
            </Link>
        </div>
      </main>
    </div>
  );
};
