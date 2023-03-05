import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.signUpInfo);

  if (!currentUser) {
    console.log(currentUser);
    return <Navigate to={"/start"} />;
  }
  return <Outlet />;
}
