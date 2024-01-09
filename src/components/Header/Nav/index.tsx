import React from "react";

import classes from "./index.module.scss";
import { Button } from "../../Button";
import { CartLink } from "../../CartLink";
import { CMSLink } from "../../Link";
import { Link } from "react-router-dom";

export const HeaderNav: React.FC = () => {
  const navItems = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Shop",
      url: "/products",
    },
  ];

  return (
    <nav
      // className={[classes.nav, user === undefined && classes.hide]
      className={[classes.nav].filter(Boolean).join(" ")}
    >
      {navItems.map((item, i) => {
        return (
          // <Link key={i} to={item.route}>
          //   {item.label}
          // </Link>
          <CMSLink key={i} {...item} appearance="none" />
        );
      })}
      <CartLink />
      {/* {user && <Link href="/account">Account</Link>} */}
      <Link to="/account">Account</Link>
      {/* {!user && ( */}
      <Button
        el="link"
        href="/login"
        label="Login"
        appearance="primary"
        onClick={() => (window.location.href = "/login")}
      />
      {/* )} */}
      {/* {user && <CartLink />} */}
    </nav>
  );
};
