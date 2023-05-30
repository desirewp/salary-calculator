import { Link } from "react-router-dom";
import "./Sidebar.css";
import Project, { projects } from "../../../assets/Classes";

interface ISidebar {
  openHelp(): void;
  // PROBLEM: ProjectId kan vara undefined
  // projectId: string | undefined;
}

const Sidebar = ({ openHelp /* projectId  */ }: ISidebar) => {
  const projectName: string = "2022HT";
  let completionStatusSettings: boolean = true;

  const completed = (status: boolean) => {
    return status ? "✅" : "🟥";
  };



  //  ------------Event Handlers ----------------------------
  const handleOpenHelp = () => {
    // Sätter showHelpbar i ProjectScreen to 'block' vilket gör att man ser hjälpfliken
    openHelp();
  };

  return (
    <div className="sidebar-container">
      <div>
        <Link to="/dashboard">⬅Projects</Link>
        {/* <p>{project.id}</p> */}
        <h2>{projectName}</h2>
        <div className="todo-list">
          <h3>TO DO (do-do-do)</h3>
          <hr />
          <ul>
            <li>
              <Link to="project/settings">
                {completed(completionStatusSettings)} Settings
              </Link>
            </li>
            <li>
              <Link to="/project/import-data">
                {completed(false)} Import data
              </Link>
            </li>
            <li>
              <a href="#">{completed(false)} Control data</a>
            </li>
            <li>
              <a href="#">{completed(false)} Freeze data</a>
            </li>
          </ul>
          <hr />
          <ul>
            <li>
              <a href="#">{completed(false)} Calculate salaries</a>
            </li>
            <li>
              <a href="#">{completed(false)} Confirm salaries</a>
            </li>
            <li>
              <a href="#">{completed(false)} Freeze salaries</a>
            </li>
          </ul>
          <hr />
          <a href="#">▶ Export salary report</a>
        </div>
      </div>
      <div className="sidebar__bottom-nav">
        <a href="#" onClick={handleOpenHelp}>
          Halp
        </a>
        <a href="#">About</a>
      </div>
    </div>
  );
};

export default Sidebar;
