import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import Dashboard from "./components/Pages/Dashboard";
import ProductDetails from "./components/Pages/ProductDetails";
import Users from "./components/Pages/Users";
import CrateNewAccount from "./components/Pages/CrateNewAccount";

import Login from "./components/Pages/Login";
import Layout from "./components/Pages/Layout";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="users" element={<Users />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="createnewaccount" element={<CrateNewAccount />} />
        <Route path="cars/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
