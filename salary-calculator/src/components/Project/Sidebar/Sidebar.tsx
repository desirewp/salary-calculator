import { Link, useParams } from "react-router-dom";
import "./Sidebar.css";
// import Project, { projects } from "../../../assets/Classes";

interface ISidebar {
  openHelp(): void;
}

const Sidebar = ({ openHelp }: ISidebar) => {
  const { projectId } = useParams();

  const projectName = "2022HT";
  let completionStatusSettings: boolean = true;

  const completed = (status: boolean) => {
    return status ? "✅" : "🟥";
  };

  //  ------------Event Handlers ----------------------------
  const handleOpenHelp = () => {
    // Sätter showHelpbar i ProjectScreen to 'block' vilket gör att man ser hjälpfliken
    openHelp();
  };

  // ----------------HTML Element------------------------------
  const projectContent = (
    <>
      <h2>{projectName}</h2>

      <div className="todo-list">
        <h3>TO DO (do-do-do)</h3>
        <hr />
        <ul>
          <li>
            <Link to={`/project/${projectId}/settings`}>
              {completed(completionStatusSettings)} Settings
            </Link>
          </li>
          <li>
            <Link to={`/project/${projectId}/import-data`}>
              {completed(false)} Import data
            </Link>
          </li>
          <li>
            <Link to={`/project/${projectId}/event-data`}>
              {completed(false)} Control events
            </Link>
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
        <ul>
          <li>
            <a href="#">▶ Export salary report</a>
          </li>
        </ul>
      </div>
    </>
  );

  const instructorContent = (
    <>
      <h2>Instructors</h2>
      <div className="todo-list">
        <hr />
        <ul>
          <li>
            <a href="#">▶ Export instructors</a>
          </li>
          <li>
            <a href="#">▶ Add instructor</a>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );

  return (
    <div className="sidebar-container">
      <div>
        <Link to="/dashboard">⬅Projects</Link>
        {/* Ifall man är inne på ett redan existeraande projekt som har ett id via params 
        så kommer innehållet i sidebar vara det för projektet annar visas innehållet för instruktörs-sidans sidebar.
        Kommer behöver bättras på med snyggare logik när man ska kunna skapa ett helt tomt projekt och det ska finnas flera main level pages (Offsets & expenses)? */}
        {projectId === undefined ? instructorContent : projectContent}
      </div>
      {/* Nedre delen som innehåller Om & Hjälp fliken är samma för varje sidn men ger olika innehåll när man öppnar den*/}
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
