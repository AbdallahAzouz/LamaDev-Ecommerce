import React from "react";
import MyProduct from "./pages/MyProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Success from "./pages/Success";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import ProductList from "./pages/ProductList";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/" element={[<Home />]} />
        <Route path="/register" element={[<Register />]} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login />}
        />
        <Route path="/cart" element={[<Cart />]} />
        <Route path="/products/:category" element={[<ProductList />]} />
        <Route path="/product/:id" element={[<MyProduct />]} />
        <Route path="/success" element={[<Success />]} />
      </Routes>
    </Router>
  );
};

export default App;
