import {BrowserRouter, Route, Routes} from "react-router-dom";
import WelcomePage from "../Pages/WelcomePage.tsx";
import AppLayout from "./AppLayout.tsx";
import { routerKeys } from "../Constants/routerKeys.tsx";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={routerKeys.welcome} element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
