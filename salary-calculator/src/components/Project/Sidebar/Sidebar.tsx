import "./Sidebar.css";

interface ISidebar{
    openHelp() : void;
}

const Sidebar = ({openHelp} : ISidebar) => {
const projectName : string = '2022HT';
let completionStatusSettings : boolean = true;

const completed = (status : boolean) => { 
  return status ? '✅' : '🟥';
 }

  const handleOpenHelp = () => {
    openHelp();
  };

  return (
    <div className="sidebar-container">
      <div>
          <a href="#">⬅Projects</a>
          <h2>{projectName}</h2>
        <div className="todo-list">
          <h3>TO DO (do-do-do)</h3>
          <hr />
          <ul>
            <li>
              <a href="#">{completed(completionStatusSettings)} Settings</a>
            </li>
            <li>
              <a href="#">{completed(false)} Import data</a>
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
