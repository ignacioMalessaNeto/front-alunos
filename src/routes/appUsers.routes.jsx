import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";


export function AppUsersRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={} /> */}
      </Routes>
    </>
  );
}
