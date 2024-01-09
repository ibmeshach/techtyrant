import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductHero } from "../../components/ProductHero";
import product1 from "../../assets/products/apple-ipad-air-256gb-purple.png";
import product2 from "../../assets/products/apple-tv-4k-wifi.png";
import product3 from "../../assets/products/airpods-max.png";
import product4 from "../../assets/products/13-inch-macbokk-air-256gb-space-gray.png";
import product5 from "../../assets/products/apple-pencil-1st-generation.png";
import product6 from "../../assets/products/15-inch-macbook-air-2tb-midnight.png";
import product7 from "../../assets/products/apple-iphone-15-pro-1tb-blue-titanium.png";
import product8 from "../../assets/products/airpods-pro-2nd-generation.png";
import product9 from "../../assets/products/apple-iphone-15-pro-max-256gb-natural-titanium.png";
import RelatedCollection from "../../components/RelatedCollections";
import { Gutter } from "../../components/Gutter";
import classes from "./index.module.scss";

const Collections = [
  {
    id: 1,
    title: "Apple iphone 15 Pro (1TB) - Blue Titanium",
    description:
      "Dive into luxury with the Apple iphone 15 Pro in Blue Titanium. Unleash powerful performance, stunning visuals, and abundant storage with 1TB, redefining excellence in smartphone technology",
    image: product1,
    price: "$129.00",
    categories: [{ title: "Phones" }],
  },
  {
    id: 2,
    title: "Apple Watch Series 9 Solo Loop (Aluminium) - Midnight",
    description:
      "Introducing the Apple Watch Series 9 Solo Loop Midnight Aluminium, Elevate your fitness and style with seamless design, advanced health features, and the convenience of the Solo Loop band",
    image: product2,
    price: "$129.00",
    categories: [{ title: "Watches" }],
  },
  {
    id: 3,
    title: "Apple iphone 15 Pro (1TB) - Blue Titanium",
    description:
      "Dive into luxury with the Apple iphone 15 Pro in Blue Titanium. Unleash powerful performance, stunning visuals, and abundant storage with 1TB, redefining excellence in smartphone technology",
    image: product3,
    price: "$129.00",
    categories: [{ title: "Phones" }],
  },
  {
    id: 4,
    title: "Apple iphone 15 Pro (1TB) - Blue Titanium",
    description:
      "Dive into luxury with the Apple iphone 15 Pro in Blue Titanium. Unleash powerful performance, stunning visuals, and abundant storage with 1TB, redefining excellence in smartphone technology",
    image: product4,
    price: "$129.00",
    categories: [{ title: "Phones" }],
  },
  {
    id: 5,
    title: "Apple iphone 15 Pro (1TB) - Blue Titanium",
    description:
      "Dive into luxury with the Apple iphone 15 Pro in Blue Titanium. Unleash powerful performance, stunning visuals, and abundant storage with 1TB, redefining excellence in smartphone technology",
    image: product5,
    price: "$129.00",
    categories: [{ title: "Phones" }],
  },
  {
    id: 6,
    title: "Apple iphone 15 Pro (1TB) - Blue Titanium",
    description:
      "Dive into luxury with the Apple iphone 15 Pro in Blue Titanium. Unleash powerful performance, stunning visuals, and abundant storage with 1TB, redefining excellence in smartphone technology",
    image: product6,
    price: "$129.00",
    categories: [{ title: "Phones" }],
  },
  {
    id: 7,
    title: "Apple iphone 15 Pro (1TB) - Blue Titanium",
    description:
      "Dive into luxury with the Apple iphone 15 Pro in Blue Titanium. Unleash powerful performance, stunning visuals, and abundant storage with 1TB, redefining excellence in smartphone technology",
    image: product7,
    price: "$129.00",
    categories: [{ title: "Phones" }],
  },
  {
    id: 8,
    title: "Apple iphone 15 Pro (1TB) - Blue Titanium",
    description:
      "Dive into luxury with the Apple iphone 15 Pro in Blue Titanium. Unleash powerful performance, stunning visuals, and abundant storage with 1TB, redefining excellence in smartphone technology",
    image: product8,
    price: "$129.00",
    categories: [{ title: "Phones" }],
  },
  {
    id: 9,
    title: "Apple iphone 15 Pro (1TB) - Blue Titanium",
    description:
      "Dive into luxury with the Apple iphone 15 Pro in Blue Titanium. Unleash powerful performance, stunning visuals, and abundant storage with 1TB, redefining excellence in smartphone technology",
    image: product9,
    price: "$129.00",
    categories: [{ title: "Phones" }],
  },
];

export default function Product() {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    // Filter the product when the 'id' parameter changes
    const foundProduct = Collections.find((item) => item.id.toString() === id);

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      setProduct(null); // Set to null if product is not found
    }
  }, [id]);

  return (
    <>
      {/* Check if the product exists before rendering */}
      {product ? (
        <>
          <ProductHero product={product} />
          <Gutter className={classes.home}>
            <RelatedCollection />
          </Gutter>
        </>
      ) : (
        <div>Product not found</div>
      )}
    </>
  );
}
