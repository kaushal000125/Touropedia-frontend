import React from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  return user ? children : <LoadingToRedirect />;  //if user is logged in render children o/w redirect to loadtoredirect
};

export default PrivateRoute;