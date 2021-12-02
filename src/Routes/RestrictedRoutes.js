import React from "react";
import { Navigate } from "react-router";

const RestrictedRoute = () => {
  return <Navigate replace to={-1} />;
};

export default RestrictedRoute;
