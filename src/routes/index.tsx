import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router";
import App from "../App";
import Users from "../components/Users";
import Navbar from "../components/UI/Navbar";
import ProductDetails from "../components/ProductDetails";
import Dashboard from "../components/UI/Dashboard";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <div className="container mx-auto">
          <Navbar />
          <Outlet />
        </div>
      }
    >
      <Route index element={<App />} />
      <Route path="users" element={<Users />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="login" element={<h1>login</h1>} />
      <Route path="cars/:id" element={<ProductDetails />} />
    </Route>,
  ),
);
export default router;
