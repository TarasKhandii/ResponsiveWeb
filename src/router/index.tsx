/* -------------------------------- Libraries ------------------------------- */
import { Route, Routes } from "react-router-dom";
/* --------------------------------- Routes --------------------------------- */
import { ROUTES } from "./routes";
/* ---------------------------------- Pages --------------------------------- */
import CaseStudiesPage from "../pages/CaseStudies";
import HomePage from "../pages/HomePage";
import ITStaff from "../pages/ITStaff";
import MobileApplicationsPage from "../pages/MobileApplications";
import ProductDevelopment from "../pages/ProductDevelopment";
import RequestQuote from "../pages/RequestQuote";
import ServerSideAppPage from "../pages/ServerSideApp";
import WebApplicationsPage from "../pages/WebApplications";

const RootNavigation = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<HomePage />} />
      <Route path={ROUTES.casePage} element={<CaseStudiesPage />} />
      <Route path={ROUTES.itStaff} element={<ITStaff />} />
      <Route path={ROUTES.mobilePage} element={<MobileApplicationsPage />} />
      <Route path={ROUTES.productPage} element={<ProductDevelopment />} />
      <Route path={ROUTES.requestPage} element={<RequestQuote />} />
      <Route path={ROUTES.serverPage} element={<ServerSideAppPage />} />
      <Route path={ROUTES.webPage} element={<WebApplicationsPage />} />
    </Routes>
  );
};

export default RootNavigation;
