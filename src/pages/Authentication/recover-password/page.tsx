import { Link } from "react-router-dom";
import { RecoverPasswordForm } from "./RecoverPasswordForm";
import classes from "./index.module.scss";
import logo from "../../../assets/logo-black.svg";
import arrowLeft from "../../../assets/icons/arrow-left.svg";

export default function RecoverPassword() {
  return (
    <section className={classes.recoverPassword}>
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
          <Link to="/login" className={classes.backLink}>
            <img src={arrowLeft} alt="left arrow" width={24} height={24} />
            <p>Back</p>
          </Link>
          <div className={classes.formTitle}>
            <h3>Forgot Password</h3>
          </div>
          <RecoverPasswordForm />
        </div>
      </div>
    </section>
  );
}
