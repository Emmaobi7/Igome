import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SignUpPageDesktop = React.lazy(() => import("pages/SignUpPageDesktop"));
const LoginPageDesktop = React.lazy(() => import("pages/LoginPageDesktop"));
const SecurityPageDesktop = React.lazy(
  () => import("pages/SecurityPageDesktop"),
);
const AboutPageDesktop = React.lazy(() => import("pages/AboutPageDesktop"));
const CareersPageDesktop = React.lazy(() => import("pages/CareersPageDesktop"));
const HomePageDesktop = React.lazy(() => import("pages/HomePageDesktop"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homepagedesktop" element={<HomePageDesktop />} />
          <Route path="/careerspagedesktop" element={<CareersPageDesktop />} />
          <Route path="/aboutpagedesktop" element={<AboutPageDesktop />} />
          <Route
            path="/securitypagedesktop"
            element={<SecurityPageDesktop />}
          />
          <Route path="/loginpagedesktop" element={<LoginPageDesktop />} />
          <Route path="/signuppagedesktop" element={<SignUpPageDesktop />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
