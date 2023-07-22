import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import s from "../assets/Layout.module.css";

const Layout = () => {
  return (
    <div className={`${s.wrapper} flex flex-col`}>
      <Header />
      <div className={s.main}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
