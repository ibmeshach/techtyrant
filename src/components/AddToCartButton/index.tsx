import React, { useEffect, useState } from "react";

import { Button, Props } from "../Button";

import classes from "./index.module.scss";
import { useCart } from "../../utils/Cart";
import { useNavigate } from "react-router-dom";

export const AddToCartButton: React.FC<{
  product: any;
  quantity?: number;
  className?: string;
  appearance?: Props["appearance"];
}> = (props) => {
  const { product, quantity = 1, className, appearance = "primary" } = props;

  // const { cart, addItemToCart, isProductInCart, hasInitializedCart } =
  //   useCart();

  const { cart, addItemToCart, isProductInCart } = useCart();

  const [isInCart, setIsInCart] = useState<boolean>();
  const navigate = useNavigate();

  useEffect(() => {
    setIsInCart(isProductInCart(product));
  }, [isProductInCart, product, cart]);

  return (
    <Button
      href={isInCart ? "/cart" : undefined}
      type={!isInCart ? "button" : undefined}
      label={isInCart ? `✓ View in cart` : `Add to cart`}
      el={isInCart ? "link" : undefined}
      appearance={appearance}
      className={[
        className,
        classes.addToCartButton,
        appearance === "default" && isInCart && classes.green,
        // !hasInitializedCart && classes.hidden,
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={
        !isInCart
          ? () => {
              addItemToCart({
                product,
                quantity,
              });

              navigate("/cart");
            }
          : undefined
      }
    />
  );
};
