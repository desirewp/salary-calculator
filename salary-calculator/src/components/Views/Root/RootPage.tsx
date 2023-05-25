import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProjectScreen from "../Project/ProjectScreen";
import StartScreen from "../Start/StartScreen";
import ErrorScreen from "../ErrorScreen/ErrorScreen";

const RootPage = () => {
 
    return (
        <>
         <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartScreen />} />
            <Route path="/dashboard" element={<StartScreen />} />
            <Route path="/project" element={<ProjectScreen />} />
            <Route path="/*" element={<ErrorScreen />} />
          </Routes>
        </BrowserRouter>
      </main>
        </>
    )
  }

export default RootPage;