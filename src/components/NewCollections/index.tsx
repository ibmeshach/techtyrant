import NewCollectionCard from "./NewCollectionCard";
import product1 from "../../assets/products/apple-ipad-air-256gb-purple.png";
import product2 from "../../assets/products/apple-tv-4k-wifi.png";
import product3 from "../../assets/products/airpods-max.png";
import product4 from "../../assets/products/13-inch-macbokk-air-256gb-space-gray.png";
import product5 from "../../assets/products/apple-pencil-1st-generation.png";
import product6 from "../../assets/products/15-inch-macbook-air-2tb-midnight.png";
import product7 from "../../assets/products/apple-iphone-15-pro-1tb-blue-titanium.png";
import product8 from "../../assets/products/airpods-pro-2nd-generation.png";
import product9 from "../../assets/products/apple-iphone-15-pro-max-256gb-natural-titanium.png";

import classes from "./index.module.scss";

import { MdOutlineChevronLeft } from "react-icons/md";
import { MdOutlineChevronRight } from "react-icons/md";
import { useState } from "react";

const Collections = [
  {
    id: 1,
    title: "Apple iphone 15 Pro (1TB) - Blue Titanium",
    description:
      "Dive into luxury with the Apple iphone 15 Pro in Blue Titanium. Unleash powerful performance, stunning visuals, and abundant storage with 1TB, redefining excellence in smartphone technology",
    image: product1,
    price: "$129.00",
  },
  {
    id: 2,
    title: "Apple Watch Series 9 Solo Loop (Aluminium) - Midnight",
    description:
      "Introducing the Apple Watch Series 9 Solo Loop Midnight Aluminium, Elevate your fitness and style with seamless design, advanced health features, and the convenience of the Solo Loop band",
    image: product2,
    price: "$129.00",
  },
  {
    id: 3,
    title: "Apple iphone 15 Pro (1TB) - Blue Titanium",
    description:
      "Dive into luxury with the Apple iphone 15 Pro in Blue Titanium. Unleash powerful performance, stunning visuals, and abundant storage with 1TB, redefining excellence in smartphone technology",
    image: product3,
    price: "$129.00",
  },
  {
    id: 4,
    title: "Apple iphone 15 Pro (1TB) - Blue Titanium",
    description:
      "Dive into luxury with the Apple iphone 15 Pro in Blue Titanium. Unleash powerful performance, stunning visuals, and abundant storage with 1TB, redefining excellence in smartphone technology",
    image: product4,
    price: "$129.00",
  },
  {
    id: 5,
    title: "Apple iphone 15 Pro (1TB) - Blue Titanium",
    description:
      "Dive into luxury with the Apple iphone 15 Pro in Blue Titanium. Unleash powerful performance, stunning visuals, and abundant storage with 1TB, redefining excellence in smartphone technology",
    image: product5,
    price: "$129.00",
  },
  {
    id: 6,
    title: "Apple iphone 15 Pro (1TB) - Blue Titanium",
    description:
      "Dive into luxury with the Apple iphone 15 Pro in Blue Titanium. Unleash powerful performance, stunning visuals, and abundant storage with 1TB, redefining excellence in smartphone technology",
    image: product6,
    price: "$129.00",
  },
  {
    id: 7,
    title: "Apple iphone 15 Pro (1TB) - Blue Titanium",
    description:
      "Dive into luxury with the Apple iphone 15 Pro in Blue Titanium. Unleash powerful performance, stunning visuals, and abundant storage with 1TB, redefining excellence in smartphone technology",
    image: product7,
    price: "$129.00",
  },
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

const NewCollection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(Collections.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleCollections = Collections.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  // Define variables for pagination
  const itemsPerPageCount = 3; // Number of items to display per page
  const totalItemsCount = Collections.length;
  const startIndexCount = (currentPage - 1) * itemsPerPageCount + 1;
  const endIndexCount = Math.min(
    currentPage * itemsPerPageCount,
    totalItemsCount
  );

  return (
    <section className={classes.container}>
      <div className={classes.titleWrapper}>
        <h3>New Collections</h3>
      </div>
      <div className={classes.lists}>
        <p>{`Showing ${startIndexCount}-${endIndexCount} of ${totalItemsCount} Products`}</p>

        <div className={classes.list}>
          {visibleCollections.map((collection) => {
            return (
              <NewCollectionCard key={collection.id} collection={collection} />
            );
          })}
        </div>
      </div>
      <div className={classes.pagination}>
        <button
          className={`${classes.icon} ${classes.leftArrow} ${
            isFirstPage ? classes.disabled : ""
          }`}
          onClick={handlePrevPage}
          disabled={isFirstPage}
        >
          <MdOutlineChevronLeft className={classes.cicon} />
        </button>
        <p>
          Page {currentPage} of {totalPages}
        </p>
        <button
          className={`${classes.icon} ${classes.rightArrow} ${
            isLastPage ? classes.disabled : ""
          }`}
          onClick={handleNextPage}
          disabled={isLastPage}
        >
          <MdOutlineChevronRight className={classes.cicon} />
        </button>
      </div>
    </section>
  );
};

export default NewCollection;
