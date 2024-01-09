import React, { Fragment } from "react";
import classes from "./index.module.scss";
import { Gutter } from "../Gutter";
import { Price } from "../Price";
import { AddToCartButton } from "../AddToCartButton";

export const ProductHero: React.FC<{
  product: any;
}> = ({ product }) => {
  const { title, categories, image, description } = product;

  return (
    <Gutter className={classes.productHero}>
      <div className={classes.mediaWrapper}>
        {!image && <div className={classes.placeholder}>No image</div>}
        {image && typeof image == "string" && (
          <img className={classes.image} src={image} />
        )}
      </div>

      <div className={classes.details}>
        <h3 className={classes.title}>{title}</h3>

        <div className={classes.categoryWrapper}>
          <div className={classes.categories}>
            {categories?.map((category: any, index: any) => {
              const { title: categoryTitle } = category as any;

              const titleToUse = categoryTitle || "Generic";
              const isLast = index === categories.length - 1;

              return (
                <p key={index} className={classes.category}>
                  {titleToUse} {!isLast && <Fragment>, &nbsp;</Fragment>}
                  <span className={classes.separator}>|</span>
                </p>
              );
            })}
          </div>
          <p className={classes.stock}> In stock</p>
        </div>

        <Price product={product} button={false} />

        <div className={classes.description}>
          <h6>Description</h6>
          <p>{description}</p>
        </div>

        <AddToCartButton
          product={product}
          className={classes.addToCartButton}
        />
      </div>
    </Gutter>
  );
};
