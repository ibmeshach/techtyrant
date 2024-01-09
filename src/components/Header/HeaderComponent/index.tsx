import { noHeaderFooterUrls } from "../../../constants";
import { Gutter } from "../../Gutter";
import { HeaderNav } from "../Nav";
import logo from "../../../assets/logo-black.svg";
import classes from "./index.module.scss";
import { Link, useLocation } from "react-router-dom";

const HeaderComponent = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <nav
      className={[
        classes.header,
        noHeaderFooterUrls.includes(pathname) && classes.hide,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Gutter className={classes.wrap}>
        <Link to="/">
          <img src={logo} alt="logo" width={170} height={50} />
        </Link>

        <HeaderNav />
      </Gutter>
    </nav>
  );
};

export default HeaderComponent;
