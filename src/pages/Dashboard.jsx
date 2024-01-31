import Widget from "../components/shared/dashboard/Widget";
import ActiveProjects from "../components/shared/dashboard/ActiveProjects";
import FlatPicker from "../components/shared/dashboard/FlatPicker";
import Task from "../components/shared/dashboard/Task";
import ProjectStatus from "../components/shared/dashboard/ProjectStatus";
import Member from "../components/shared/dashboard/Team";
import Chat from "../components/shared/dashboard/Chat";

const DashboardLeader = () => {
  return (
    <div className="h-screen  ">
      <Widget />
      <div className="w-full mt-6 flex items-start">
        <ActiveProjects className="h-7" />
        <FlatPicker />
      </div>
      <div className="mt-2 ">
        <Task />
      </div>
      <div className="flex mx-5 ">
        <ProjectStatus />
        <Member />
        <Chat />
      </div>
    </div>
  );
};

export default DashboardLeader;
