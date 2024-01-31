{
  /*import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppstoreFilled,
  FileTextOutlined,
  CarryOutOutlined,
  MessageOutlined,
  CalendarOutlined,
  PieChartFilled,
  TeamOutlined,
  DownOutlined,
  RightOutlined,
} from "@ant-design/icons";
import "./Sidebar.css";
import collaborative from "../../assets/collaborative.png";

const MemberSidebar = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [isProjectDropdownOpen, setProjectDropdownOpen] = useState(false);
  const [isTaskDropdownOpen, setTaskDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setSelectedItem(location.pathname);
  }, [location.pathname]);

  const toggleProjectDropdown = () => {
    setProjectDropdownOpen(!isProjectDropdownOpen);
    setTaskDropdownOpen(false);
  };

  const toggleTaskDropdown = () => {
    setTaskDropdownOpen(!isTaskDropdownOpen);
    setProjectDropdownOpen(false);
  };
  const sidebarItems = [
    {
      path: "/dashboard",
      label: "Dashboard",
      icon: <AppstoreFilled />,
    },
    {
      path: "/project",
      label: "Project",
      icon: <FileTextOutlined />,
      subItems: [
        { path: "/overview", label: "Project Overview" },
        { path: "/create", label: "Create Project" },
      ],
    },
    {
      path: "/task",
      label: "Task",
      icon: <CarryOutOutlined />,
      subItems: [
        { path: "/taskdetails", label: "Task Details" },
        { path: "/kanban", label: "Kanban Board" },
        { path: "/mytask", label: "My Task" },
      ],
    },
    { path: "/teamchat", label: "Team Chat", icon: <MessageOutlined /> },
    { path: "/calendar", label: "Calendar", icon: <CalendarOutlined /> },
    { path: "/report", label: "Report", icon: <PieChartFilled /> },
    { path: "/member", label: "My Teams", icon: <TeamOutlined /> },
  ];
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={collaborative} alt="Logo" width="32" height="32" />
        <span>TC&M</span>
      </div>
      <ul className="list">
        {sidebarItems.map((item) => (
          <li className="item" key={item.path}>
            <div
              className={`row ${selectedItem === item.path ? "selected" : ""}`}
            >
              {item.subItems &&
              (item.path === "/project" || item.path === "/task") ? (
                <div
                  className={`dropdown ${
                    (item.path === "/project" && isProjectDropdownOpen) ||
                    (item.path === "/task" && isTaskDropdownOpen)
                      ? "active"
                      : ""
                  }`}
                >
                  <div
                    className="links "
                    onClick={
                      item.path === "/project"
                        ? toggleProjectDropdown
                        : toggleTaskDropdown
                    }
                  >
                    {item.icon}
                    <span className="user">{item.label}</span>
                    {item.path === "/project" ? (
                      isProjectDropdownOpen ? (
                        <DownOutlined
                          style={{ marginLeft: "65px", fontSize: "13px" }}
                        />
                      ) : (
                        <RightOutlined
                          style={{ marginLeft: "65px", fontSize: "13px" }}
                        />
                      )
                    ) : isTaskDropdownOpen ? (
                      <DownOutlined
                        style={{ marginLeft: "85px", fontSize: "13px" }}
                      />
                    ) : (
                      <RightOutlined
                        style={{ marginLeft: "85px", fontSize: "13px" }}
                      />
                    )}
                  </div>
                  {((item.path === "/project" && isProjectDropdownOpen) ||
                    (item.path === "/task" && isTaskDropdownOpen)) && (
                    <ul className="sublist">
                      {item.subItems.map((subItem) => (
                        <li
                          key={subItem.path}
                          className={`sublist-item ${
                            selectedItem === subItem.path ? "selected" : ""
                          }`}
                        >
                          <Link to={subItem.path} className="sublink">
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`links ${
                    selectedItem === item.path ? "selected" : ""
                  }`}
                >
                  {item.icon}
                  <span className="user">{item.label}</span>
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberSidebar;*/
}

import { Menu } from "antd";
import { useState } from "react";
import {
  AppstoreFilled,
  FileTextOutlined,
  CarryOutOutlined,
  MessageOutlined,
  CalendarOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import collaborative from "../../assets/collaborative.png";
import PropTypes from "prop-types";
import "./Sidebar.css";

const MemberSidebar = ({ collapsed }) => {
  const iconSize = collapsed ? 23 : 19;
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const rootSubmenuKeys = ["subproject", "subtask"];

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center text-2xl px-6 py-3 gap-3">
        {!collapsed && (
          <>
            <img src={collaborative} alt="Logo" width="34" height="32" />
            <span className="text-[#9333ea] font-bold">TC&M</span>
          </>
        )}
        {collapsed && (
          <img src={collaborative} alt="Logo" width="34" height="32" />
        )}
      </div>
      <Menu
        mode="inline"
        className="mt-3"
        style={{ background: "none", border: "none" }}
        inlineCollapsed={collapsed}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      >
        <Menu.Item
          key="dashboard"
          icon={<AppstoreFilled style={{ fontSize: iconSize }} />}
        >
          <Link to="/">Dashboard</Link>
        </Menu.Item>

        <Menu.SubMenu
          key="subproject"
          icon={<FileTextOutlined style={{ fontSize: iconSize }} />}
          title="Project"
        >
          <Menu.Item key="project-overview">
            <Link to="/overview">Project Overview</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu
          key="subtask"
          icon={<CarryOutOutlined style={{ fontSize: iconSize }} />}
          title="Task"
        >
          <Menu.Item key="task-detail">
            {" "}
            <Link to="/taskdetail">Task Details</Link>
          </Menu.Item>
          <Menu.Item key="kanban">
            {" "}
            <Link to="/kanban">Kanban </Link>
          </Menu.Item>
          <Menu.Item key="mytask">
            {" "}
            <Link to="/mytask">My Tasks</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item
          key="calendar"
          icon={<CalendarOutlined style={{ fontSize: iconSize }} />}
        >
          <Link to="/calendar">Calendar</Link>
        </Menu.Item>
        <Menu.Item
          key="teamchat"
          icon={<MessageOutlined style={{ fontSize: iconSize }} />}
        >
          <Link to="/teamchat">Team Chat</Link>
        </Menu.Item>

        <Menu.Item
          key="member"
          icon={<TeamOutlined style={{ fontSize: iconSize }} />}
        >
          <Link to="/member">My Teams</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};
MemberSidebar.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  // Add other prop types if needed
};

export default MemberSidebar;
