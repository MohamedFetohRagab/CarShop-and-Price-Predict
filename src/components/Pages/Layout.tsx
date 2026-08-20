import { Outlet } from "react-router";
import Navbar from "../UI/Navbar";
const Layout = () => {
  return (
    <div className="container mx-auto relative">
      <Navbar />
      <div className="pt-26">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
