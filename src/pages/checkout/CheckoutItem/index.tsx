import { Link } from "react-router-dom";
import classes from "./index.module.scss";
import { Price } from "../../../components/Price";

export const CheckoutItem = ({
  product,
  title,
  metaImage,
  quantity,
  index,
}: {
  product: any;
  title: any;
  metaImage: any;
  quantity: any;
  index: any;
}) => {
  return (
    <li className={classes.item} key={index}>
      <Link to={`/products/${product.id}`} className={classes.mediaWrapper}>
        {!metaImage && <span>No image</span>}
        {/* {metaImage && typeof metaImage !== "string" && ( */}
        <img className={`${classes.media} ${classes.image}`} src={metaImage} />
        {/* )} */}
      </Link>

      <div className={classes.itemDetails}>
        <div className={classes.titleWrapper}>
          <h6>{title}</h6>
          <Price product={product} button={false} />
        </div>
        <p className={classes.quantity}>x{quantity}</p>
      </div>

      <div className={classes.subtotal}>
        <Price product={product} button={false} quantity={quantity} />
      </div>
    </li>
  );
};
