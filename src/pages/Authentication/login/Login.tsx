import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import logo from "../../../assets/logo-black.svg";
import hand from "../../../assets/icons/hand.png";

import classes from "./index.module.scss";

export default function Login() {
  return (
    <section className={classes.login}>
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
            <h3>Welcome</h3>
            <img src={hand} alt="hand" width={30} height={30} />
          </div>

          <p>Please login here</p>

          <LoginForm />
        </div>
      </div>
    </section>
  );
}
