import { useState } from "react";
import "./Helpbar.css";
import SettingsHelpContent from "./Settings/SettingsHelpContent";

interface IHelpbar{
    helpWindowDisplay : string;
    closeHelp(): void;
}

const Helpbar = ({helpWindowDisplay, closeHelp } : IHelpbar) => {
  const handleClickCloseHelpbar = () => {
    closeHelp();
  };

  return (
    <div className="helpbar-container-wrapper">
      <div className="helpbar-container" style={{ display: helpWindowDisplay }}>
        <button className="closeBtn" onClick={handleClickCloseHelpbar}>X</button>
        <h2>Help</h2>
        <hr></hr>

        <SettingsHelpContent></SettingsHelpContent>
      </div>
    </div>
  );
};

export default Helpbar;
