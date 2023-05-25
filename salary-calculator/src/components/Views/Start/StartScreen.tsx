import React from "react";

import "./StartScreen.css";

import { Link } from "react-router-dom";
// Är vår fejkade produkt data
import { projects } from "../../../assets/Classes";

const StartScreen = () => {
  return (
    <section>
      <div>
        <h1>PayDay Calculator</h1>
      </div>
      <div className="box">
        <div className="flex-container-row">
          <h2>Projects</h2>
          <Link to="/project">
            <button>New project</button>
          </Link>
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
                    <Link to="">
                      <button >Open</button>
                      </Link>
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
    </section>
  );
};

export default StartScreen;
