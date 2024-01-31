import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import ProjectOverview from ".././components/shared/project/ProjectOverview";
import CreateProject from ".././components/shared/project/CreateProject";
import Kanban from ".././components/shared/task/Kanban";
import TaskDetail from ".././components/shared/task/TaskDetail";
import Member from ".././components/shared/member/Member";
import Calendar1 from "../components/shared/calendar/Calendar";

const DashboardPages = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/project-overview" element={<ProjectOverview />} />
      <Route path="/create-project" element={<CreateProject />} />
      <Route path="/kanban" element={<Kanban />} />
      <Route path="/taskdetail" element={<TaskDetail />} />
      {/*<Route path="/report" element={<Report />} />*/}
      <Route path="/member" element={<Member />} />
      <Route path="/calendar" element={<Calendar1 />} />
    </Routes>
  );
};

export default DashboardPages;
