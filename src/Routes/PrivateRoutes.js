import React from "react";
import { Navigate } from "react-router";

const PrivateRoutes = () => {
  return <Navigate replace to="/login" />;
};

export default PrivateRoutes;
