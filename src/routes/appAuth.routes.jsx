import { Routes, Route } from "react-router-dom";

import  { Login }  from "../pages/Login";

import { Signup } from "../pages/Signup";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Signup />} />
    </Routes>
  );
}
