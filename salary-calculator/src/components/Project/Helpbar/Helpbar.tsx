import "./Helpbar.css";
import SettingsHelpContent from "../Settings/SettingsHelpContent";

interface IHeplbar {
  showHelpbar: string;
  setShowHelpbar: React.Dispatch<React.SetStateAction<string>>;
}

const Helpbar = ({ showHelpbar, setShowHelpbar }: IHeplbar) => {
  // ----------Event handlers-----------------
  const handleCloseHelpbar = () => {
    setShowHelpbar("none");
  };

  return (
    <div className="helpbar-container-wrapper">
      <div className="helpbar-container" style={{ display: showHelpbar }}>
        <button className="closeBtn" onClick={handleCloseHelpbar}>
          X
        </button>
        <h2>Help</h2>
        <hr></hr>

        <SettingsHelpContent />
      </div>
    </div>
  );
};

export default Helpbar;
