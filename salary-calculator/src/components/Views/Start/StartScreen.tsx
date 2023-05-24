import React from "react";

import "./StartScreen.css";
import Project from "./Classes";

const StartScreen = () => {
  // ---------- Placeholder data -------------
  const projects: Project[] = [
    new Project("done", "ht 2022", "2022-12-14"),
    new Project("in progress", "vt 2022", "2022-06-04"),
    new Project("waiting", "ht 2021", "2021-12-14"),
    new Project("done", "vt 2021", "2021-06-14"),
  ];

  //__________EVENTS HANDLERS________________
  const handleClickNewProject = () => {
    return alert("Tjaaaaaa!");
  };

  return (
    <main>
      <div>
        <h1>PayDay Calculator</h1>
      </div>
      <div className="box">
        <div className="flex-container-row">
          <h2>Projects</h2>
          <button onClick={handleClickNewProject}>New project</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>
                <h3>
                  Status
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </h3>
              </th>
              <th>
                <h3>
                  Semester
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </h3>
              </th>
              <th>
                <h3>
                  Created
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </h3>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => {
              return (
                <tr>
                  <td>
                    <p>{project.status}</p>
                  </td>
                  <td>
                    <p>{project.semester}</p>
                  </td>
                  <td>
                    <p>{project.created}</p>
                  </td>
                  <td>
                    <button>Open</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex-container-row row">
        <div className="box">
          <h2>Instructors</h2>
        </div>
        <div className="box">
          <h2>Offsets</h2>
        </div>
        <div className="box">
          <h2>Expenses</h2>
        </div>
      </div>
    </main>
  );
};

export default StartScreen;
