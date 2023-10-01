import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ComplexNavbar } from "../components/NavBar";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import NotFound from "../Pages/NotFound";
import { SimpleFooter } from "../components/Footer";

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
      component: About,
    },
    {
      path: "/projects",
      component: Projects,
    },
  ];
  return (
    <Router basename="/">
      <ComplexNavbar />
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
