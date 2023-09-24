import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavbarDefault } from "../components/NavBar";
import { BookingCard } from "../components/Card";
import Projects from "../Pages/Projects";
import NotFound from "../Pages/NotFound";

const LayoutRoutes = () => {
  const routes = [
    {
      path: "/",
      component: Projects,
    },
    {
      path: "/*",
      component: NotFound,
    },
  ];
  return (
    <Router basename="/">
      <NavbarDefault />
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            Component={route.component}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default LayoutRoutes;
