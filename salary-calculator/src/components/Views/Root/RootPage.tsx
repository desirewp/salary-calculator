import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ProjectScreen from "../Project/ProjectScreen";
import StartScreen from "../Start/StartScreen";
import ErrorScreen from "../ErrorScreen/ErrorScreen";

const router = createBrowserRouter([
  { path: "/", element: <StartScreen />, errorElement: <ErrorScreen /> },
  { path: "/dashboard", element: <StartScreen /> },
  // { path: "/project", element: <ProjectScreen /> },
  { path: "/project/:projectId/*", element: <ProjectScreen />, errorElement: <ErrorScreen/> },
  // { path: "/*", element: <ErrorScreen /> },
]);

const RootPage = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default RootPage;
