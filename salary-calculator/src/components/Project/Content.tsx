import ImportData from "./ImportData/ImportData";
import Settings from "./Settings/Settings";

import "./Content.css"
import { Route, Routes } from "react-router-dom";

const Content = () => {
    return (
      <div>
        <Routes>
        {/* <Route path="/project/" element={<Settings/>} /> */}
        <Route path="/settings" element={<Settings/>} />
        <Route path="/import-data" element={<ImportData/>} />
        </Routes>
      </div>
    );
  };
  
  export default Content;
  