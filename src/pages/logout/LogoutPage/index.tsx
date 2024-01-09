import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const LogoutPage: React.FC<{}> = () => {
  // const { logout } = useAuth()
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setSuccess("");
    setError("");
  }, []);

  // useEffect(() => {
  //   const performLogout = async () => {
  //     try {
  //       await logout()
  //       setSuccess('Logged out successfully.')
  //     } catch (_) {
  //       setError('You are already logged out.')
  //     }
  //   }

  //   performLogout()
  // }, [logout])

  return (
    <Fragment>
      {/* {(error || success) && ( */}
      <div>
        <h1>{error || success}</h1>
        <p>
          {"What would you like to do next?"}
          {/* {typeof productsPage === 'object' && productsPage?.slug && ( */}
          <Fragment>
            {" "}
            <Link to={`/products`}>Click here</Link>
            {` to shop.`}
          </Fragment>
          {/* )} */}
          {` To log back in, `}
          <Link to="/login">click here</Link>
          {"."}
        </p>
      </div>
      {/* )} */}
    </Fragment>
  );
};
