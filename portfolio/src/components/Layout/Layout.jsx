import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-content">
        <Sidebar />
        <div className="content">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
