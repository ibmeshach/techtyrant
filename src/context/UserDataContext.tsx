import { createContext } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";

export const UserData = createContext<any>(null); // set the initial value to null

function UserDataContext(): JSX.Element {
  return (
    <UserData.Provider value={{}}>
      <ScrollToTop />
      <Outlet />
    </UserData.Provider>
  );
}

export default UserDataContext;
