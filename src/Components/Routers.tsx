import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { routerKeys } from "../Constants/routerKeys.tsx";
import WelcomePage from "../Pages/WelcomePage.tsx";
import AuthenticationPage from "../Pages/AuthentificationPage.tsx";
import DashboardPage from "../Pages/DashboardPage.tsx";
import PrivateRoute from "./PrivateRoute.tsx";
import RegisterPage from "../Pages/RegisterPage.tsx";
import { AccountPage } from "../Pages/AccountPage.tsx";
import { CompanyPage } from "../Pages/CompanyPage.tsx";
import AppLayout from "../Components/AppLayout.tsx";
import UpdateCompanyForm from "../Features/Company/UpdateCompanyForm.tsx";
import {describe} from "node:test";
import {CompanyList} from "../Features/Company/CompanyList.tsx";
import CompanyUpdateForm from "../Features/Company/UpdateCompanyForm.tsx";

const company = {id: 1, name: "Andrii", description: "Hello"}
export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to={routerKeys.welcome} />} />
        <Route path={routerKeys.welcome} element={<WelcomePage />} />
        <Route path={routerKeys.login} element={<AuthenticationPage />} />
        <Route path={routerKeys.register} element={<RegisterPage />} />
        <Route path={routerKeys.update} element={
          <UpdateCompanyForm company={company} />} />
        <Route element={<PrivateRoute />}>
          <Route path={routerKeys.account} element={<AccountPage />} />
          <Route path={routerKeys.dashboard} element={<DashboardPage />} />
          <Route path={routerKeys.company} element={<CompanyPage />} />
          <Route path="/update-company/:companyId" element={<CompanyUpdateForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
