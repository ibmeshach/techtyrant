import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import watches from "../../assets/categories/watches-category.png";
import phones from "../../assets/categories/phones-category.png";
import laptops from "../../assets/categories/laptops-category.png";
import classes from "./index.module.scss";

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Watches",
      image: watches,
    },
    {
      id: 2,
      title: "Phones",
      image: phones,
    },
    {
      id: 3,
      title: "Laptops",
      image: laptops,
    },
  ];
  return (
    <section className={classes.container}>
      <div className={classes.titleWrapper}>
        <h3>Shop by Categories</h3>
        <Link to="/products">Show All</Link>
      </div>

      <div className={classes.list}>
        {categories.map((category) => {
          return <CategoryCard key={category.id} category={category} />;
        })}
      </div>
    </section>
  );
};

export default Categories;
