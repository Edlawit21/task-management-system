import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Dashboard from "../components/shared/dashboard/Dashboard";
import ProjectOverview from "../components/shared/project/ProjectOverview";
import CreateProject from "../components/shared/project/CreateProject";
import Kanban from "../components/shared/task/Kanban";
import TaskDetail from "../components/shared/task/TaskDetail";
import Calendar from "../components/shared/calendar/Calendar";
import Member from "../components/shared/member/Member";
import LeaderSidebar from "../components/Sidebar/LeaderSidebar";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button } from "antd";

const { Header, Sider, Content } = Layout;

const DashboardLeader = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth <= 768);
  const [isSidebarVisible, setIsSidebarVisible] = useState(
    window.innerWidth > 425
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 425) {
        setIsSidebarVisible(false);
        setCollapsed(false);
      } else {
        setIsSidebarVisible(true);
        setCollapsed(window.innerWidth <= 768);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (window.innerWidth <= 425) {
      setIsSidebarVisible(!isSidebarVisible);
      if (!isSidebarVisible) {
        setCollapsed(false);
      }
    } else {
      setCollapsed(!collapsed);
    }
  };

  const handleSidebarLinkClick = () => {
    if (window.innerWidth <= 425) {
      setIsSidebarVisible(false);
    }
  };

  return (
    <Router>
      <Layout>
        {(isSidebarVisible || window.innerWidth > 425) && (
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            onCollapse={setCollapsed}
            width={220}
            style={{
              height: "100vh",
              overflow: "hidden",
              backgroundColor: "white",
              borderRight: "1px solid #ebe9e9",
            }}
          >
            <LeaderSidebar
              collapsed={collapsed}
              onLinkClick={handleSidebarLinkClick}
            />
          </Sider>
        )}
        <Layout>
          <Header
            style={{
              padding: 0,
              background: "white",
              height: "50px",
              display: "flex",
              alignItems: "center",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Button
              type="text"
              icon={
                isSidebarVisible ? (
                  <MenuUnfoldOutlined
                    style={{ fontSize: "25px", color: "#8b93a0" }}
                  />
                ) : (
                  <MenuFoldOutlined
                    style={{ fontSize: "25px", color: "#8b93a0" }}
                  />
                )
              }
              onClick={toggleSidebar}
              style={{
                fontSize: "16px",
                width: 50,
                height: 50,
              }}
            />
            <Navbar />
          </Header>
          <div
            style={{
              overflowY: "auto",
              maxHeight: "calc(100vh - 50px)",
              backgroundColor: "#F1F5F9",
            }}
          >
            <Content style={{}}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/project-overview" element={<ProjectOverview />} />
                <Route path="/create-project" element={<CreateProject />} />
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/taskdetail" element={<TaskDetail />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/member" element={<Member />} />
              </Routes>
            </Content>
          </div>
        </Layout>
      </Layout>
    </Router>
  );
};

export default DashboardLeader;
