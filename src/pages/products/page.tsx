import Collection from "../../components/Collection";
import { Gutter } from "../../components/Gutter";
import { HR } from "../../components/HR";
import Filters from "./Filters";
import classes from "./index.module.scss";

const categories = [
  {
    id: 1,
    title: "Watches",
  },
  {
    id: 2,
    title: "Phones",
  },
  {
    id: 3,
    title: "Laptops",
  },
  {
    id: 4,
    title: "TV % Home",
  },
  {
    id: 5,
    title: "Ipads",
  },
  {
    id: 6,
    title: "Accessories",
  },
];

const Products = () => {
  return (
    <div className={classes.container}>
      <Gutter className={classes.products}>
        <Filters categories={categories} />
        <Collection />
      </Gutter>
      <HR />
    </div>
  );
};

export default Products;
