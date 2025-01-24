import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { routerKeys } from "../Constants/routerKeys.tsx";
import WelcomePage from "../Pages/WelcomePage.tsx";
import AuthenticationPage from "../Pages/AuthentificationPage.tsx";
import DashboardPage from "../Pages/DashboardPage.tsx";
import PrivateRoute from "./PrivateRoute.tsx";
import RegisterPage from "../Pages/RegisterPage.tsx";
import {AccountPage} from "../Pages/AccountPage.tsx";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Navigate replace to={routerKeys.welcome} />} />
          <Route path={routerKeys.welcome} element={<WelcomePage />} />
          <Route path={routerKeys.login} element={<AuthenticationPage />} />
          <Route path={routerKeys.register} element={<RegisterPage />} />
          <Route element={<PrivateRoute />}>
            <Route path={routerKeys.dashboard} element={<DashboardPage />} />
            <Route path={routerKeys.account} element={<AccountPage />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}
