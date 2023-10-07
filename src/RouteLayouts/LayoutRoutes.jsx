import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import TextTyper from "../Pages/TextTyper";
import Projects from "../Pages/Projects";
import NotFound from "../Pages/NotFound";
import { StepperWithIcon } from "../components/Steper";
import { FooterWithLogo } from "../components/Footer";

const LayoutRoutes = () => {
  const routes = [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/*",
      component: NotFound,
    },
    {
      path: "/about",
      component: TextTyper,
    },
    {
      path: "/projects",
      component: Projects,
    },
  ];
  return (
    <Router basename="/">
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            Component={route.component}
          />
        ))}
      </Routes>
      <FooterWithLogo />
    </Router>
  );
};

export default LayoutRoutes;
