import { Link } from "react-router-dom";
import { Button } from "../../../components/Button";
import classes from "./index.module.scss";
import { useEffect, useState } from "react";
import { RenderParams } from "../../../components/RenderParams";
import { formatDateTime } from "../../../utils/formatDateTime";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders([]);
  }, []);
  // const { token } = await getMeUser({
  //   nullUserRedirect: `/login?error=${encodeURIComponent(
  //     'You must be logged in to view your orders.',
  //   )}&redirect=${encodeURIComponent('/orders')}`,
  // })

  // let orders: Order[] | null = null

  // try {
  //   orders = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/orders`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `JWT ${token}`,
  //     },
  //     cache: 'no-store',
  //   })
  //     ?.then(async res => {
  //       if (!res.ok) notFound()
  //       const json = await res.json()
  //       if ('error' in json && json.error) notFound()
  //       if ('errors' in json && json.errors) notFound()
  //       return json
  //     })
  //     ?.then(json => json.docs)
  // } catch (error) {
  //   console.error(error)
  // }

  return (
    <div>
      <h5>My Orders</h5>
      {(!orders || !Array.isArray(orders) || orders?.length === 0) && (
        <p className={classes.noOrders}>You have no orders.</p>
      )}
      <RenderParams />
      {orders && orders.length > 0 && (
        <ul className={classes.orders}>
          {orders?.map((order: any) => (
            <li key={order.id} className={classes.order}>
              <Link className={classes.item} to={`/account/orders/${order.id}`}>
                <div className={classes.itemContent}>
                  <h6 className={classes.itemTitle}>{`Order ${order.id}`}</h6>
                  <div className={classes.itemMeta}>
                    <p>
                      {"Total: "}
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "usd",
                      }).format(order.total / 100)}
                    </p>
                    <p
                      className={classes.orderDate}
                    >{`Ordered On: ${formatDateTime(order.createdAt)}`}</p>
                  </div>
                </div>
                <Button
                  appearance="default"
                  label="View Order"
                  className={classes.button}
                  el="link"
                  href={`/account/orders/${order.id}`}
                />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
