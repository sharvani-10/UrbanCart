import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./Pages/home/Home";
import Order from "./Pages/order/Order";
import Cart from "./Pages/Cart/Cart";
import Dashboard from "./Pages/admin/dashboard/Dashboard";
import Nopage from "./Pages/nopage/Nopage";
import Mystate from "./Context/Data/Mystate";
import Login from "./Pages/Registartion/Login";
import Signup from "./Pages/Registartion/Signup";
import Productinfo from "./Pages/Productinfo/Productinfo";
import Addproducts from "./Pages/admin/Page/Addproducts";
import UpdateProduct from "./Pages/admin/Page/Updateproduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Allproducts from "./Pages/allproducts/AllProducts";
function App() {
  return (
    <Mystate>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route
            path="/order"
            element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRouteForAdmin>
                <Dashboard />
              </ProtectedRouteForAdmin>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Productinfo/:id" element={<Productinfo />} />
          <Route
            path="/Addproducts"
            element={
              <ProtectedRouteForAdmin>
                <Addproducts />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/UpdateProduct"
            element={
              <ProtectedRouteForAdmin>
                <UpdateProduct />
              </ProtectedRouteForAdmin>
            }
          />
          <Route path="/*" element={<Nopage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </Mystate>
  );
}

export default App;

// user

export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

// admin

const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  // give your mail

  if (admin.user.email === " ") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
