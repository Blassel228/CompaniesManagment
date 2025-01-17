import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routerKeys } from "../Constants/routerKeys.tsx";
import WelcomePage from "../Pages/WelcomePage.tsx";
import AuthenticationPage from "../Pages/AuthentificationPage.tsx";
import DashboardPage from "../Pages/DashboardPage.tsx";
import PrivateRoute from "./PrivateRoute.tsx";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={routerKeys.welcome} element={<WelcomePage />} />
          <Route path={routerKeys.login} element={<AuthenticationPage />} />
          <Route element={<PrivateRoute />}>
            <Route path={routerKeys.dashboard} element={<DashboardPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}
