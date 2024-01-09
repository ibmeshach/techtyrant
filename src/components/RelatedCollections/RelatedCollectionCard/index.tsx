import { Link } from "react-router-dom";
import classes from "./index.module.scss";

type CollectionCardProps = {
  collection: any;
};

const RelatedCollectionCard = ({ collection }: CollectionCardProps) => {
  return (
    <Link
      to={`/product/${collection.id}`}
      className={classes.card}
      // style={{ backgroundImage: `url(${collection.image})` }}
      onClick={() => {}}
    >
      <div className={classes.image}>
        <img src={collection.image} alt="collection image" />
      </div>

      <div className={classes.text}>
        <div className={classes.title}>{collection.title}</div>

        <div className={classes.subText}>
          <p className={classes.description}>{collection.description}</p>
          <p className={classes.price}>{collection.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default RelatedCollectionCard;
