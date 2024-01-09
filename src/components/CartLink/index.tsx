"use client";

import React, { Fragment, useEffect, useState } from "react";

// import { useCart } from '../../_providers/Cart'

import classes from "./index.module.scss";
import { Link } from "react-router-dom";

export const CartLink: React.FC<{
  className?: string;
}> = (props) => {
  const { className } = props;
  // const { cart } = useCart()
  const [length, setLength] = useState<number>(0);

  // useEffect(() => {
  //   setLength(cart?.items?.length || 0)
  // }, [cart])

  useEffect(() => {
    setLength(0);
  }, []);

  return (
    <Link
      className={[classes.cartLink, className].filter(Boolean).join(" ")}
      to="/cart"
    >
      <Fragment>
        Cart
        {typeof length === "number" && length > 0 && (
          <small className={classes.quantity}>({length})</small>
        )}
      </Fragment>
    </Link>
  );
};
