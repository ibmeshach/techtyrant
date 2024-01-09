import "./App.scss";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import UserDataContext from "./context/UserDataContext";
import Home from "./pages/Home";
import Login from "./pages/Authentication/login/Login";
import CreateAccount from "./pages/Authentication/create-account/CreateAccount";
import RecoverPassword from "./pages/Authentication/recover-password/page";
import ResetPassword from "./pages/Authentication/reset-password/page";
import NotFound from "./pages/not-found";
import LandingPage from "./pages/LandingPage/LandingPage";
import Products from "./pages/products/page";
import Product from "./pages/ProductDetails/page";
import Cart from "./pages/cart/page";
import Checkout from "./pages/checkout/page";
import Account from "./pages/account/page";
import Layout from "./pages/account/layout";
import Purchases from "./pages/account/purchases/page";
import Orders from "./pages/account/orders/page";
import Logout from "./pages/logout/page";

function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<UserDataContext />}>
        <Route path="/" element={<Home />}>
          <Route path="*" element={<NotFound />} />
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<CreateAccount />} />
          <Route path="/recover-password" element={<RecoverPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="account" element={<Layout />}>
            <Route index element={<Account />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default Router;
