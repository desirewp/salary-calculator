import { useEffect, useState } from "react";
import Helpbar from "../../Project/Helpbar/Helpbar";
import Sidebar from "../../Project/Sidebar/Sidebar";
import { Outlet, useParams } from "react-router-dom";
import Project, { projects } from "../../../assets/Classes";

interface IProjectScreen {}

const ProjectScreen = () => {
  const { projectId } = useParams();
  const [showHelpbar, setShowHelpbar] = useState<string>("block");
  const [project, setProject] = useState<Project[]>([]);

  // ----------- Event Handlers ------------
  const openHelp = () => {
    setShowHelpbar("block");
  };

  // Hämtar rätt projekt från exempeldatan och lägger det i useSate variabeln project
  const getProject = () => {
    const gottenProject = projects.filter((project) => {
      project.id === projectId;
    });

    setProject(gottenProject);
  };

  useEffect(() => {
    // getProject();
  }, []);

  return (
    <div className="flex-container-row">
      {/* <p>{project.id}</p> */}
      <Sidebar openHelp={openHelp} />
      <section>
        <Outlet />
      </section>
      <Helpbar showHelpbar={showHelpbar} setShowHelpbar={setShowHelpbar}/>
    </div>
  );
};

export default ProjectScreen;
