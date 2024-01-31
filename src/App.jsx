{
  /*import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminSidebar from "./dashboard/adminSidebar/AdminSidebar";
import Navbar from "./dashboard/navbar/Navbar";
import DashboardPage from "./dashboard/pages/dashboardPage/DashboardPage";
import ProjectListPage from "./dashboard/pages/projectPage/projectListPage/ProjectListPage";
import CreateProject from "./dashboard/pages/projectPage/createProject/CreateProject";
import ListTask from "./dashboard/pages/taskPage/ListTask";
import Calender2 from "./dashboard/pages/calender/Calender2";
import Kanban from "./dashboard/pages/taskPage/kanbanBoard/Kanban";
import Team from "./dashboard/pages/team/Team";
import Report from "./dashboard/pages/report/Report";
//import SignIn from "./login/SignUp";

function App() {
  return (
    <div className="app">
      {/*<SignIn />*/
}
{
  /*<Router>
        <div className="sidebar">
          <AdminSidebar />
        </div>
        <div className="nav">
          <Navbar />
        </div>
        <div className="pages">
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/list" element={<ProjectListPage />} />
            <Route path="/create" element={<CreateProject />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/listview" element={<ListTask />} />
            <Route path="/calendar" element={<Calender2 />} />
            <Route path="/report" element={<Report />} />
            <Route path="/member" element={<Team />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;*/
}

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import DashboardSupervisor from "./supervisor/dashboard/DashboardSupervisor";
import DashboardLeader from "./pages/DashboardLeader";
//import AdminDashboard from "./pages/AdminDashboard";
//import DashboardMember from "./member/dashboard/DashboardMember";
//import LandingPage from "./landing/LandingPage";
//import SignUp from "./login/SignUp";
//import AdminSidebar from "./components/Sidebar/AdminSidebar";
//import Layout from "./components/Layout";
//import AdminSidebar from "./components/Sidebar/AdminSidebar";
import DashboardMember from "./pages/DashboardMember";

const App = () => {
  return (
    <>
      <DashboardLeader /> {/*<AdminDashboard />
       */}

      {/*<Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>*/}
    </>
  );
};

export default App;
{
  /*
import { useState, useEffect } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, Avatar } from "antd";
import LeaderSidebar from "./components/Sidebar/LeaderSidebar";
import { BrowserRouter as Router } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth <= 768); // Set initial state based on screen width

  useEffect(() => {
    const handleResize = () => {
      // Update the collapsed state when the window is resized
      setCollapsed(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Router>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={220}
          style={{ height: "100vh", overflow: "hidden" }}
        >
          <div className="demo-logo-vertical" />
          <LeaderSidebar collapsed={collapsed} />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "nav 1",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "nav 2",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
            ]}
          />
        </Sider>

        <Layout>
          <Header
            style={{
              padding: 0,
              background: "white",
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <div
            style={{
              overflowY: "auto",
              maxHeight: "calc(100vh - 64px)", // Adjust the height as needed
            }}
          >
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "grey",
                borderRadius: "10px",

                overflowY: "auto",
              }}
            >
              Content
              <div>jehhkjhdjk</div>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "24px",
                    alignItems: "center",
                  }}
                >
                  <div className="col-team">
                    <div
                      style={{
                        height: "8em",
                        background: "grey",
                        borderStartEndRadius: "10px",
                        borderStartStartRadius: "10px",
                      }}
                    ></div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Avatar
                        size={{
                          xs: 24,
                          sm: 32,
                          md: 40,
                          lg: 64,
                          xl: 80,
                          xxl: 100,
                        }}
                        style={{
                          border: "4px solid white",
                          width: "100px",
                          height: "100px",
                          marginTop: "-50px",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "5px",
                      }}
                    >
                      <button>abebe bseo</button>
                      <h2>full stack</h2>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "20px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                          paddingRight: " 20px",
                        }}
                      >
                        <h1 style={{ textAlign: "center" }}> 10</h1>
                        <h1>projects</h1>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                          borderLeft: "1px solid",
                          paddingLeft: "30px",
                        }}
                      >
                        <h1 style={{ textAlign: "center" }}> 11</h1>
                        <h1>tasks</h1>
                      </div>
                    </div>
                  </div>

                  <div className="col-team">
                    <div
                      style={{
                        height: "8em",
                        background: "grey",
                        borderStartEndRadius: "10px",
                        borderStartStartRadius: "10px",
                      }}
                    ></div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Avatar
                        size={{
                          xs: 24,
                          sm: 32,
                          md: 40,
                          lg: 64,
                          xl: 80,
                          xxl: 100,
                        }}
                        style={{
                          border: "4px solid white",
                          width: "100px",
                          height: "100px",
                          marginTop: "-50px",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "5px",
                      }}
                    >
                      <button>abebe bseo</button>
                      <h2>full stack</h2>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "20px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                          paddingRight: " 20px",
                        }}
                      >
                        <h1 style={{ textAlign: "center" }}> 10</h1>
                        <h1>projects</h1>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                          borderLeft: "1px solid",
                          paddingLeft: "30px",
                        }}
                      >
                        <h1 style={{ textAlign: "center" }}> 11</h1>
                        <h1>tasks</h1>
                      </div>
                    </div>
                  </div>

                  <div className="col-team">
                    <div
                      style={{
                        height: "8em",
                        background: "grey",
                        borderStartEndRadius: "10px",
                        borderStartStartRadius: "10px",
                      }}
                    ></div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Avatar
                        size={{
                          xs: 24,
                          sm: 32,
                          md: 40,
                          lg: 64,
                          xl: 80,
                          xxl: 100,
                        }}
                        style={{
                          border: "4px solid white",
                          width: "100px",
                          height: "100px",
                          marginTop: "-50px",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "5px",
                      }}
                    >
                      <button>abebe bseo</button>
                      <h2>full stack</h2>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "20px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                          paddingRight: " 20px",
                        }}
                      >
                        <h1 style={{ textAlign: "center" }}> 10</h1>
                        <h1>projects</h1>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                          borderLeft: "1px solid",
                          paddingLeft: "30px",
                        }}
                      >
                        <h1 style={{ textAlign: "center" }}> 11</h1>
                        <h1>tasks</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Content>
          </div>
        </Layout>
      </Layout>
    </Router>
  );
};
export default App;*/
}
