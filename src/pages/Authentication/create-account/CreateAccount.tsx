import CreateAccountForm from "./CreateAccountForm";
import classes from "./index.module.scss";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo-black.svg";
import hand from "../../../assets/icons/hand.png";

export default function CreateAccount() {
  return (
    <section className={classes.createAccount}>
      <div className={classes.heroImg}>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            width={250}
            height={23}
            className={classes.logo}
          />
        </Link>
      </div>

      <div className={classes.formWrapper}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <h3>Create Account</h3>
            <img src={hand} alt="hand" width={30} height={30} />
          </div>

          <p>Please enter details</p>

          <CreateAccountForm />
        </div>
      </div>
    </section>
  );
}
