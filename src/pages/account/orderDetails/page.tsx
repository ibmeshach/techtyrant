import { Fragment, useEffect, useState } from "react";

import classes from "./index.module.scss";
import { formatDateTime } from "../../../utils/formatDateTime";
import { Link } from "react-router-dom";
import { Price } from "../../../components/Price";
import { HR } from "../../../components/HR";

export default async function Order() {
  const [order, setOrder] = useState<any>({});

  useEffect(() => {
    setOrder({});
  }, []);

  // const { token } = await getMeUser({
  //   nullUserRedirect: `/login?error=${encodeURIComponent(
  //     'You must be logged in to view this order.',
  //   )}&redirect=${encodeURIComponent(`/order/${id}`)}`,
  // })

  // let order: Order | null = null

  // try {
  //   order = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/orders/${id}`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `JWT ${token}`,
  //     },
  //   })?.then(async res => {
  //     if (!res.ok) notFound()
  //     const json = await res.json()
  //     if ('error' in json && json.error) notFound()
  //     if ('errors' in json && json.errors) notFound()
  //     return json
  //   })
  // } catch (error) {
  //   console.error(error) // eslint-disable-line no-console
  // }

  // if (!order) {
  //   notFound()
  // }

  return (
    <div>
      <h5>
        {`Order`}
        <span className={classes.id}>{` ${order.id}`}</span>
      </h5>
      <div className={classes.itemMeta}>
        <p>{`ID: ${order.id}`}</p>
        <p>{`Payment Intent: ${order.stripePaymentIntentID}`}</p>
        <p>{`Ordered On: ${formatDateTime(order.createdAt)}`}</p>
        <p className={classes.total}>
          {"Total: "}
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "usd",
          }).format(order.total / 100)}
        </p>
      </div>

      <div className={classes.order}>
        {order.items?.map((item: any, index: any) => {
          if (typeof item.product === "object") {
            const {
              quantity,
              product,
              product: { id, title, stripeProductID },
            } = item;

            const metaImage = product?.image;

            return (
              <Fragment key={index}>
                <div className={classes.row}>
                  <Link
                    to={`/products/${product.id}`}
                    className={classes.mediaWrapper}
                  >
                    {!metaImage && (
                      <span className={classes.placeholder}>No image</span>
                    )}
                    {/* {metaImage && typeof metaImage !== "string" && ( */}
                    <img
                      className={`${classes.media} ${classes.image}`}
                      src={metaImage}
                    />

                    {/* )} */}
                  </Link>
                  <div className={classes.rowContent}>
                    {!stripeProductID && (
                      <p className={classes.warning}>
                        {
                          "This product is not yet connected to Stripe. To link this product, "
                        }
                        <Link
                          to={`${process.env.NEXT_PUBLIC_SERVER_URL}/admin/collections/products/${id}`}
                        >
                          edit this product in the admin panel
                        </Link>
                        {"."}
                      </p>
                    )}
                    <h6 className={classes.title}>
                      <Link
                        to={`/products/${product.id}`}
                        className={classes.titleLink}
                      >
                        {title}
                      </Link>
                    </h6>
                    <p>{`Quantity: ${quantity}`}</p>
                    <Price
                      product={product}
                      button={false}
                      quantity={quantity}
                    />
                  </div>
                </div>
              </Fragment>
            );
          }

          return null;
        })}
      </div>
      <HR className={classes.hr} />
    </div>
  );
}
