import React from "react";

import classes from "./index.module.scss";
import { useCart } from "../../utils/Cart";
import deleteIcon from "../../assets/icons/delete.svg";

export const RemoveFromCartButton: React.FC<{
  className?: string;
  product: any;
}> = (props) => {
  const { className, product } = props;

  const { deleteItemFromCart, isProductInCart } = useCart();

  const productIsInCart = isProductInCart(product);

  if (!productIsInCart) {
    return <div>Item is not in the cart</div>;
  }

  return (
    <button
      type="button"
      onClick={() => {
        deleteItemFromCart(product);
      }}
      className={[className, classes.removeFromCartButton]
        .filter(Boolean)
        .join(" ")}
    >
      <img
        src={deleteIcon}
        alt="delete"
        width={24}
        height={24}
        className={classes.qtnBt}
      />
    </button>
  );
};
