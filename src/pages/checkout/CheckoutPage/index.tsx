import React, { Fragment } from "react";

import classes from "./index.module.scss";
import { Link } from "react-router-dom";
import { useCart } from "../../../utils/Cart";
import { CheckoutItem } from "../CheckoutItem";
import { Button } from "../../../components/Button";

export const CheckoutPage: React.FC<{}> = () => {
  // const {
  //   settings: { productsPage },
  // } = props;

  // const navigate = useNavigation();
  // const [error, setError] = React.useState<string | null>(null);
  // const [clientSecret, setClientSecret] = React.useState();
  // const hasMadePaymentIntent = React.useRef(false);

  const { cart, cartIsEmpty, cartTotal } = useCart();

  // useEffect(() => {
  //   if (user !== null && cartIsEmpty) {
  //     router.push('/cart')
  //   }
  // }, [router, user, cartIsEmpty])

  // useEffect(() => {
  //   if (user && cart && hasMadePaymentIntent.current === false) {
  //     hasMadePaymentIntent.current = true

  //     const makeIntent = async () => {
  //       try {
  //         const paymentReq = await fetch(
  //           `${process.env.NEXT_PUBLIC_SERVER_URL}/api/create-payment-intent`,
  //           {
  //             method: 'POST',
  //             credentials: 'include',
  //           },
  //         )

  //         const res = await paymentReq.json()

  //         if (res.error) {
  //           setError(res.error)
  //         } else if (res.client_secret) {
  //           setError(null)
  //           setClientSecret(res.client_secret)
  //         }
  //       } catch (e) {
  //         setError('Something went wrong.')
  //       }
  //     }

  //     makeIntent()
  //   }
  // }, [cart, user])

  // if (!user || !stripe) return null

  return (
    <Fragment>
      {cartIsEmpty && (
        <div>
          {"Your "}
          <Link to="/cart">cart</Link>
          {" is empty."}
          {/* {typeof productsPage === 'object' && productsPage?.slug && ( */}
          <Fragment>
            {" "}
            <Link to={`/products`}>Continue shopping?</Link>
          </Fragment>
          {/* )} */}
        </div>
      )}
      {!cartIsEmpty && (
        <div className={classes.items}>
          <div className={classes.header}>
            <p>Products</p>
            <div className={classes.headerItemDetails}>
              <p></p>
              <p className={classes.quantity}>Quantity</p>
            </div>
            <p className={classes.subtotal}>Subtotal</p>
          </div>

          <ul>
            {cart?.items?.map((item: any, index: any) => {
              if (typeof item.product === "object") {
                const {
                  quantity,
                  product,
                  product: { title },
                } = item;

                if (!quantity) return null;

                const metaImage = product?.image;

                return (
                  <Fragment key={index}>
                    <CheckoutItem
                      product={product}
                      title={title}
                      metaImage={metaImage}
                      quantity={quantity}
                      index={index}
                    />
                  </Fragment>
                );
              }
              return null;
            })}
            <div className={classes.orderTotal}>
              <p>Order Total</p>
              <p>{cartTotal.formatted}</p>
            </div>
          </ul>
        </div>
      )}
      {/* {!clientSecret && !error && (
        <div className={classes.loading}>
          <LoadingShimmer number={2} />
        </div>
      )} */}

      <div className={classes.buttons}>
        <Button label="Back to cart" href="/cart" appearance="secondary" />
        <Button label="Checkout" href="/" appearance="primary" />
      </div>
    </Fragment>
  );
};
