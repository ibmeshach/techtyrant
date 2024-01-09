import shipping from "../assets/icons/shipping.svg";
import dollar from "../assets/icons/dollar.svg";
import support from "../assets/icons/support.svg";
import payment from "../assets/icons/payment.svg";
import user from "../assets/icons/user.svg";
import purchases from "../assets/icons/purchases.svg";
import orders from "../assets/icons/orders.svg";
import logout from "../assets/icons/logout.svg";
export const inclusions = [
  {
    title: "Free Shipping",
    description: "Free shipping for order above $150",
    icon: shipping,
  },
  {
    title: "Money Guarantee",
    description: "Within 30 days for an exchange",
    icon: dollar,
  },
  {
    title: "Online Support",
    description: "24 hours a day, 7 days a week",
    icon: support,
  },
  {
    title: "Flexible Payment",
    description: "Pay with multiple credit cards",
    icon: payment,
  },
];

export const profileNavItems = [
  {
    title: "Personal Information",
    url: "/account",
    icon: user,
  },
  {
    title: "My Purchases",
    url: "/account/purchases",
    icon: purchases,
  },
  {
    title: "My Orders",
    url: "/account/orders",
    icon: orders,
  },
  {
    title: "Logout",
    url: "/logout",
    icon: logout,
  },
];

export const noHeaderFooterUrls = [
  "/create-account",
  "/login",
  "/recover-password",
];
