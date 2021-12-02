import React from "react";
import Productpage from "../product_page/productpage";
import { Route, Routes } from "react-router-dom";
import CartPage from "../cart_page/cartPage";
import HomePage from "../home/homepage";
import LoginPage from "../user/login/loginPage";
import SignupPage from "../user/signup/signupPage";
import User from "../user/user/user";
import ProductSection from "../product_page/ProductSection";
import { UserLoggedInContext } from "../app";
import PrivateRoutes from "./PrivateRoutes";
import Bookmark from "../bookmark/Bookmark";
import RestrictedRoute from "./RestrictedRoutes";

function MyRoutes() {
  const userLoggedInContext = React.useContext(UserLoggedInContext);
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="products" element={<Productpage />}>
        <Route
          path="electronics"
          element={<ProductSection category={"electronics"} />}
        />
        <Route
          path="jewelery"
          element={<ProductSection category={"jewelery"} />}
        />
        <Route
          path="men's%20clothing"
          element={<ProductSection category={"men's clothing"} />}
        />
        <Route
          path="women's%20clothing"
          element={<ProductSection category={"women's clothing"} />}
        />
      </Route>
      <Route path="/cart" element={<CartPage />} />
      <Route
        path="/login"
        element={
          userLoggedInContext.state ? <RestrictedRoute /> : <LoginPage />
        }
      />
      <Route
        path="/signup"
        element={
          userLoggedInContext.state ? <RestrictedRoute /> : <SignupPage />
        }
      />
      <Route path="/user" element={<User />} />
      <Route
        path="/bookmark"
        element={userLoggedInContext.state ? <Bookmark /> : <PrivateRoutes />}
      />
      <Route path="bookmark/:name/:id" element={<Bookmark />} />
    </Routes>
  );
}

export default MyRoutes;
