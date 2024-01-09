import { Gutter } from "../../components/Gutter";
import { CheckoutPage } from "./CheckoutPage";
import classes from "./index.module.scss";

export default function Checkout() {
  // await getMeUser({
  //   nullUserRedirect: `/login?error=${encodeURIComponent(
  //     'You must be logged in to checkout.',
  //   )}&redirect=${encodeURIComponent('/checkout')}`,
  // })

  return (
    <div className={classes.checkout}>
      <Gutter>
        <h3>Checkout</h3>

        <CheckoutPage />
      </Gutter>
    </div>
  );
}
