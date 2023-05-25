import { useState } from "react";
import Content from "../../Project/Content";
import Helpbar from "../../Project/Helpbar";
import Sidebar from "../../Project/Sidebar/Sidebar";


const ProjectScreen = () => {
  const [showHelpbar, setShowHelpbar] = useState<string>('block');

const openHelp = () => { 
  setShowHelpbar('block')
 }

  return (
    <div className="flex-container-row">
      <Sidebar openHelp={openHelp}/>
      <Content/>
      <Helpbar showHelpbar={showHelpbar} setShowHelpbar={setShowHelpbar}/>
    </div>
  );
};

export default ProjectScreen;
