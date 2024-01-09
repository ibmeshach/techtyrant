import { useEffect, useState } from "react";
import classes from "./index.module.scss";
import { Link } from "react-router-dom";
import { formatDateTime } from "../../../utils/formatDateTime";
import { Price } from "../../../components/Price";

export default function Purchases() {
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    setUser("");
  }, []);

  // const { user } = await getMeUser({
  //   nullUserRedirect: `/login?error=${encodeURIComponent(
  //     'You must be logged in to access your account.',
  //   )}&redirect=${encodeURIComponent('/account')}`,
  // })

  return (
    <div>
      <h5>Purchased Products</h5>
      <div>
        {user?.purchases?.length || 0 > 0 ? (
          <ul className={classes.purchases}>
            {user?.purchases?.map((purchase: any, index: any) => {
              return (
                <li key={index} className={classes.purchase}>
                  {typeof purchase === "string" ? (
                    <p>{purchase} Test</p>
                  ) : (
                    <Link
                      to={`/products/${purchase.id}`}
                      className={classes.item}
                    >
                      <div className={classes.mediaWrapper}>
                        {!purchase.meta.image && (
                          <div className={classes.placeholder}>No image</div>
                        )}
                        {/* {purchase.meta.image && typeof purchase.meta.image !== 'string' && ( */}
                        <img
                          className={classes.image}
                          src={purchase.meta.image}
                        />
                        {/* )} */}
                      </div>
                      <div className={classes.itemDetails}>
                        <h6>{purchase.title}</h6>
                        <Price product={purchase} />
                        <p
                          className={classes.purchasedDate}
                        >{`Purchased On: ${formatDateTime(
                          purchase.createdAt
                        )}`}</p>
                      </div>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <div className={classes.noPurchases}>You have no purchases.</div>
        )}
      </div>
    </div>
  );
}
