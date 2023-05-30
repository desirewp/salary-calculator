import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ProjectScreen from "../Project/ProjectScreen";
import StartScreen from "../Start/StartScreen";
import ErrorScreen from "../ErrorScreen/ErrorScreen";
import Settings from "../../Project/Settings/Settings";
import ImportData from "../../Project/ImportData/ImportData";

const router = createBrowserRouter([
  { path: "/", element: <StartScreen />, errorElement: <ErrorScreen /> },
  { path: "/dashboard", element: <StartScreen /> },
  { path: "/project", element: <ProjectScreen/> },
  {
    path: "/project/:projectId/",
    element: <ProjectScreen/>,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: "/project/:projectId/settings",
        element: <Settings/>,
        errorElement: <ErrorScreen />,
      },
      {
        path: "/project/:projectId/import-data",
        element: <ImportData/>,
        errorElement: <ErrorScreen />,
      },
    ],
  },
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
