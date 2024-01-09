import { Link } from "react-router-dom";
import classes from "./index.module.scss";

type CategoryCardProps = {
  category: any;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link
      to="/products"
      className={classes.card}
      style={{ backgroundImage: `url(${category.image})` }}
      onClick={() => {}}
    >
      <p className={classes.title}>{category.title}</p>
    </Link>
  );
};

export default CategoryCard;
