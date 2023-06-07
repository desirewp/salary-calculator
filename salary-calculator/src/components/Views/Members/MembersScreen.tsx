import { useState } from "react";
import Sidebar from "../../Project/Sidebar/Sidebar";
import "./MembersScreen.css";
import Helpbar from "../../Project/Helpbar/Helpbar";
// Är vår statiska lista med instruktörer
import { instructors2023 } from "../../../assets/Classes";

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
          <h1>Instructors 2023</h1>
          <table className="instructors-table">
            <thead>
              <tr>
                <th>
                  <p>
                    Name
                    <span className="material-symbols-outlined">
                      arrow_drop_down
                    </span>
                  </p>
                </th>
                <th>
                  <p>
                    Email
                    <span className="material-symbols-outlined">
                      arrow_drop_down
                    </span>
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {instructors2023.map((instructor) => {
                return (
                  <tr>
                    <td>
                      <p>
                        {instructor.fName} {instructor.lName}
                      </p>
                    </td>
                    <td>
                      <p>{instructor.email}</p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
      <Helpbar showHelpbar={showHelpbar} setShowHelpbar={setShowHelpbar} />
    </div>
  );
};

export default MemberScreen;
