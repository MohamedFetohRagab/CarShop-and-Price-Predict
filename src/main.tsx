import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import App from "./App";
import ProductDetails from "./components/Pages/ProductDetails";
import Dashboard from "./components/Pages/Dashboard";
import Users from "./components/Pages/Users";
import Navbar from "./components/UI/Navbar";
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
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
      </Route>
    </Routes>
  </BrowserRouter>,
);
