import Widget from "./Widget";
import ActiveProject from "./ActiveProject";
import FlatPicker from "./FlatPicker";
import Team from "./Team";
import Task from "./Task";
import ProjectStatus from "./ProjectStatus";
//import { FloatButton } from "antd";
const DashboardPage = () => {
  return (
    <div style={{ height: "300vh" }}>
      <Widget />
      <div style={{ display: "flex", marginTop: "26px" }}>
        <ActiveProject style={{ height: "200px" }} />
        <FlatPicker />
      </div>
      <div style={{ display: "flex" }}>
        <Task />
        <ProjectStatus />
      </div>
      <Team />
      
    </div>
  );
};

export default DashboardPage;
{/*
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
  </div>*/}