import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppstoreOutlined,
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

const AdminSidebar = () => {
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
      icon: <AppstoreOutlined />,
    },
    {
      path: "/project",
      label: "Project",
      icon: <FileTextOutlined />,
      subItems: [
        { path: "/overview", label: "Project Overview" },
        { path: "/list", label: "Project List" },
        { path: "/create", label: "Create Project" },
      ],
    },
    {
      path: "/task",
      label: "Task",
      icon: <CarryOutOutlined />,
      subItems: [
        { path: "/kanban", label: "Kanban Board" },
        { path: "/listview", label: "List View" },
        { path: "/taskdetails", label: "Task Details" },
      ],
    },
    { path: "/teamchat", label: "Team Chat", icon: <MessageOutlined /> },
    { path: "/calendar", label: "Calendar", icon: <CalendarOutlined /> },
    { path: "/report", label: "Report", icon: <PieChartFilled /> },
    { path: "/member", label: "Members", icon: <TeamOutlined /> },
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

export default AdminSidebar;
