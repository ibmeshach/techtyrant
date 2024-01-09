import { Cta } from "../../components/Cta";
import { Gutter } from "../../components/Gutter";
import { CartPage } from "./CartPage";

import classes from "./index.module.scss";

export default function Cart() {
  return (
    <div className={classes.container}>
      <Gutter>
        <h3>Cart</h3>
        <CartPage />
        <Cta />
      </Gutter>
    </div>
  );
}
