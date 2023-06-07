import { useState } from "react";
import Sidebar from "../../Project/Sidebar/Sidebar";
import "./MembersScreen.css";
import Helpbar from "../../Project/Helpbar/Helpbar";

const MemberScreen = () => {
  const [showHelpbar, setShowHelpbar] = useState<string>("none");

  // ----------- Event Handlers ------------
  const openHelp = () => {
    setShowHelpbar("block");
  };

  return (
    <div className="content-container">
      <Sidebar openHelp={openHelp} />
      <section className="content">
        
        <div className="box">
          <h1>Heeeeej</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                    
                <th>Email</th>
            
                <th>SSN</th>
              </tr>
            </thead>
          <tbody>
            
          </tbody>
          </table>
        </div>
      
      </section>
      <Helpbar showHelpbar={showHelpbar} setShowHelpbar={setShowHelpbar} />
    </div>
  );
};

export default MemberScreen;
