import RelatedCollectionCard from "./RelatedCollectionCard";

import product8 from "../../assets/products/airpods-pro-2nd-generation.png";
import product9 from "../../assets/products/apple-iphone-15-pro-max-256gb-natural-titanium.png";
import classes from "./index.module.scss";

const Collections = [
  {
    id: 8,
    title: "Apple iphone 15 Pro (1TB) - Blue Titanium",
    description:
      "Dive into luxury with the Apple iphone 15 Pro in Blue Titanium. Unleash powerful performance, stunning visuals, and abundant storage with 1TB, redefining excellence in smartphone technology",
    image: product8,
    price: "$129.00",
  },
  {
    id: 9,
    title: "Apple iphone 15 Pro (1TB) - Blue Titanium",
    description:
      "Dive into luxury with the Apple iphone 15 Pro in Blue Titanium. Unleash powerful performance, stunning visuals, and abundant storage with 1TB, redefining excellence in smartphone technology",
    image: product9,
    price: "$129.00",
  },
];

const RelatedCollection = () => {
  return (
    <section className={classes.container}>
      <div className={classes.titleWrapper}>
        <h3>Related Products</h3>
      </div>
      <div className={classes.lists}>
        <div className={classes.list}>
          {Collections.map((collection) => {
            return (
              <RelatedCollectionCard
                key={collection.id}
                collection={collection}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedCollection;
