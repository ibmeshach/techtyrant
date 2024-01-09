import React, { Fragment } from "react";
import CartItem from "../CartItem";
import classes from "./index.module.scss";
import { useCart } from "../../../utils/Cart";
import { Link } from "react-router-dom";
import { Button } from "../../../components/Button";
import { LoadingShimmer } from "../../../components/LoadingShimmer";

export const CartPage: React.FC<{}> = () => {
  // const { settings } = props;
  // const { productsPage } = settings || {};

  const { cart, cartIsEmpty, addItemToCart, cartTotal, hasInitializedCart } =
    useCart();

  console.log(cartIsEmpty, "ise");

  return (
    <Fragment>
      <br />
      {hasInitializedCart ? (
        <div className={classes.loading}>
          <LoadingShimmer />
        </div>
      ) : (
        <Fragment>
          {cartIsEmpty ? (
            <div className={classes.empty}>
              Your cart is empty.
              <Fragment>
                {" "}
                <Link to={`/product`}>Click here</Link>
                {` to shop.`}
              </Fragment>
              {/* {!user && ( */}
              <Fragment>
                {" "}
                <Link to={`/login?redirect=%2Fcart`}>Log in</Link>
                {` to view a saved cart.`}
              </Fragment>
              {/* )} */}
            </div>
          ) : (
            <div className={classes.cartWrapper}>
              <div>
                {/* CART LIST HEADER */}
                <div className={classes.header}>
                  <p>Products</p>
                  <div className={classes.headerItemDetails}>
                    <p></p>
                    <p></p>
                    <p>Quantity</p>
                  </div>
                  <p className={classes.headersubtotal}>Subtotal</p>
                </div>
                {/* CART ITEM LIST */}
                <ul className={classes.itemsList}>
                  {cart?.items?.map((item: any) => {
                    if (typeof item.product === "object") {
                      const {
                        quantity,
                        product,
                        product: { title },
                      } = item;

                      // const isLast = index === (cart?.items?.length || 0) - 1;

                      const metaImage = product?.image;

                      return (
                        <CartItem
                          product={product}
                          title={title}
                          metaImage={metaImage}
                          qty={quantity}
                          addItemToCart={addItemToCart}
                        />
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>

              <div className={classes.summary}>
                <div className={classes.row}>
                  <h6 className={classes.cartTotal}>Summary</h6>
                </div>

                <div className={classes.row}>
                  <p className={classes.cartTotal}>Delivery Charge</p>
                  <p className={classes.cartTotal}>$0</p>
                </div>

                <div className={classes.row}>
                  <p className={classes.cartTotal}>Grand Total</p>
                  <p className={classes.cartTotal}>{cartTotal.formatted}</p>
                </div>

                <Button
                  className={classes.checkoutButton}
                  // href={user ? '/checkout' : '/login?redirect=%2Fcheckout'}
                  href={"/checkout"}
                  // label={user ? 'Checkout' : 'Login to checkout'}
                  label={"Checkout"}
                  appearance="primary"
                />
              </div>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};
