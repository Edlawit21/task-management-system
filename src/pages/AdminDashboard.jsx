{
  /*import Navbar from "../components/navbar/Navbar";
import AdminSidebar from "../components/sidebar/AdminSidebar";
import CreateGroups from "./admin/CreateGroups";
import RegisterMentor from "./admin/RegisterMentor";
import ViewGroups from "./admin/ViewGroups";
import ViewMentor from "./admin/ViewMentor";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Dashboard.css";
import RegisteredUsers from "./admin/RegisteredUsers";

const AdminDashboard = () => {
  return (
    <Router>
      <div className="supervisor-container">
        <div className="sidebar">
          <AdminSidebar />
        </div>
        <div className="nav">
          <Navbar />
        </div>
        <div className="pages">
          <Routes>
            <Route path="/" element={<RegisterMentor />} />
            <Route path="/view-mentor" element={<ViewMentor />} />
            <Route path="/create-group" element={<CreateGroups />} />
            <Route path="/view-groups" element={<ViewGroups />} />
            <Route path="/users" element={<RegisteredUsers />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AdminDashboard;*/
}

import { useState, useEffect } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminSidebar from "../components/Sidebar/AdminSidebar";
import CreateGroups from "./admin/CreateGroups";
import RegisterMentor from "./admin/RegisterMentor";
import ViewGroups from "./admin/ViewGroups";
import ViewMentor from "./admin/ViewMentor";
import RegisteredUsers from "./admin/RegisteredUsers";
import AdminNav from "../components/navbar/AdminNav";

const { Header, Sider, Content } = Layout;

const App = () => {
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
              minHeight: "100vh",
              overflow: "hidden",
              backgroundColor: "white",
              borderRight: "1px solid #ebe9e9",
            }}
          >
            <AdminSidebar
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
            <AdminNav />
          </Header>
          <Content
            style={{
              overflowY: "auto",
              maxHeight: "calc(100vh - 50px)",
              overflowX: "hidden",
              backgroundColor: "#F1F5F9",
              padding: "20px",
            }}
          >
            <Routes>
              <Route path="/" element={<RegisterMentor />} />
              <Route path="/view-mentor" element={<ViewMentor />} />
              <Route path="/create-groups" element={<CreateGroups />} />
              <Route path="/view-groups" element={<ViewGroups />} />
              <Route path="/registered-users" element={<RegisteredUsers />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
