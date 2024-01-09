import { Outlet } from "react-router-dom";
import "./Home.scss";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
const Home = () => {
  return (
    <div className="gen__home">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
