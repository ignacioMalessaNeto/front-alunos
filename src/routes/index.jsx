import { BrowserRouter } from "react-router-dom";
import { AppUsersRoutes } from "./appUsers.routes";
import { AuthRoutes } from "./appAuth.routes";
import { useAuth } from "../hooks/auth.jsx";

export function Routes() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      {user ? <AppUsersRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}
