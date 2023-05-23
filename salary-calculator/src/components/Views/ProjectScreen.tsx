import { useState } from "react";

import Content from "../Project/Content";
import Helpbar from "../Project/Helpbar";
import Sidebar from "../Project/Sidebar/Sidebar";

const ProjectScreen = () => {
  const [helpWindowDisplay, setHelpWindowDisplay] = useState("block");

  const openHelp = () => {
    setHelpWindowDisplay("block");
  };
  const closeHelp = () => {
    setHelpWindowDisplay("none");
  };

  return (
    <div className="flex-container-row">
      <Sidebar openHelp={openHelp}></Sidebar>
      <Content></Content>
      <Helpbar
        helpWindowDisplay={helpWindowDisplay}
        closeHelp={closeHelp}
      ></Helpbar>
    </div>
  );
};

export default ProjectScreen;
