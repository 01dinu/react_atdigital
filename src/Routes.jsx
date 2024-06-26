import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Px from "pages/Px";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Px /> },
    { path: "*", element: <NotFound /> },
    {
      path: "px",
      element: <Px />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
