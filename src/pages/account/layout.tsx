import { profileNavItems } from "../../constants/";
import { UserInfo } from "./UserInfo";

import classes from "./index.module.scss";
import { Link, Outlet } from "react-router-dom";
import { Gutter } from "../../components/Gutter";

export default function Layout() {
  return (
    <div className={classes.container}>
      <Gutter>
        <h3>My Profile</h3>
        <div className={classes.account}>
          <div className={classes.nav}>
            <UserInfo />

            <ul>
              {profileNavItems.map((item) => (
                <li key={item.title}>
                  <Link to={item.url} className={classes.navItem}>
                    <img
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                    />
                    <p>{item.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Outlet />
        </div>
      </Gutter>
    </div>
  );
}
