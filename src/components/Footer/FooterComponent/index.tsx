import { Link, useLocation } from "react-router-dom";
import { inclusions, noHeaderFooterUrls } from "../../../constants";
import { Button } from "../../Button";
import { Gutter } from "../../Gutter";
import logo from "../../../assets/logo-white.svg";
import facebook from "../../../assets/footer/facebook.svg";
import instagram from "../../../assets/footer/instagram.svg";
import twitter from "../../../assets/footer/twitter.svg";

import classes from "./index.module.scss";

const FooterComponent = () => {
  const location = useLocation();
  const { pathname } = location;

  const navItems = [
    {
      label: "Facebook",
      link: "https://facebook.com",
      icon: facebook,
    },
    {
      label: "Instagram",
      link: "https://instagram.com",
      icon: instagram,
    },
    {
      label: "X",
      link: "https://x.com",
      icon: twitter,
    },
  ];

  return (
    <footer
      className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ""}
    >
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map((inclusion) => (
            <li key={inclusion.title}>
              <img
                src={inclusion.icon}
                alt={inclusion.title}
                width={36}
                height={36}
                className={classes.icon}
              />

              <h5 className={classes.title}>{inclusion.title}</h5>
              <p>{inclusion.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>

      <div className={classes.footer}>
        <Gutter>
          <div className={classes.wrap}>
            <Link to="/">
              <img src={logo} alt="logo" width={170} height={50} />
            </Link>

            <p>#2024 Tech Tyrant All rights reserved</p>

            <div className={classes.socialLinks}>
              {navItems.map((item, index) => {
                return (
                  <Button
                    key={index}
                    el="link"
                    href={item.link}
                    newTab={true}
                    className={classes.socialLinkItem}
                  >
                    <img
                      src={item.icon}
                      alt={item.label}
                      width={24}
                      height={24}
                      className={classes.socialIcon}
                    />
                  </Button>
                );
              })}
            </div>
          </div>
        </Gutter>
      </div>
    </footer>
  );
};

export default FooterComponent;
