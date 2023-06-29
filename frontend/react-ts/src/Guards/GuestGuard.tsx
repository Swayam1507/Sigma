import React from "react";
import { useNavigate } from "react-router-dom";
// import { ReactNode } from "react";

function GuestGuard({ children, ...props }: { children?: any }): any {
  console.log({props})
  const token: string | null = localStorage.getItem("token");
  const navigate = useNavigate();
  if (token) {
    navigate("dashboard");
  }
  return (children);
}

export default GuestGuard;
