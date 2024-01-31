{
  /*import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  UsergroupAddOutlined,
  UserOutlined,
  LogoutOutlined,
  DownOutlined,
  RightOutlined,
} from "@ant-design/icons";
import "./Sidebar.css";
import collaborative from "../../assets/collaborative.png";

const AdminSidebar = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [isMentorDropdownOpen, setMentorDropdownOpen] = useState(false);
  const [isGroupsDropdownOpen, setGroupsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setSelectedItem(location.pathname);
  }, [location.pathname]);

  const toggleMentorDropdown = () => {
    setMentorDropdownOpen(!isMentorDropdownOpen);
    setGroupsDropdownOpen(false);
  };

  const toggleGroupsDropdown = () => {
    setGroupsDropdownOpen(!isGroupsDropdownOpen);
    setMentorDropdownOpen(false);
  };
  const sidebarItems = [
    {
      path: "/",
      label: "Mentor",
      icon: <UserOutlined />,
      subItems: [
        { path: "/", label: "Register Mentor" },
        { path: "/view-mentor", label: "View Mentor" },
      ],
    },
    {
      path: "/groups",
      label: "Groups",
      icon: <UsergroupAddOutlined />,
      subItems: [
        { path: "/create-group", label: "Create Group" },
        { path: "/view-groups", label: "View Groups" },
        { path: "/users", label: "Registered Users" },
      ],
    },
    {
      path: "/logout",
      label: "Logout",
      icon: <LogoutOutlined />,
    },
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
              (item.path === "/" || item.path === "/groups") ? (
                <div
                  className={`dropdown ${
                    (item.path === "/" && isMentorDropdownOpen) ||
                    (item.path === "/groups" && isGroupsDropdownOpen)
                      ? "active"
                      : ""
                  }`}
                >
                  <div
                    className="links "
                    onClick={
                      item.path === "/"
                        ? toggleMentorDropdown
                        : toggleGroupsDropdown
                    }
                  >
                    {item.icon}
                    <span className="user">{item.label}</span>
                    {item.path === "/" ? (
                      isMentorDropdownOpen ? (
                        <DownOutlined
                          style={{ marginLeft: "80px", fontSize: "13px" }}
                        />
                      ) : (
                        <RightOutlined
                          style={{ marginLeft: "80px", fontSize: "13px" }}
                        />
                      )
                    ) : isGroupsDropdownOpen ? (
                      <DownOutlined
                        style={{ marginLeft: "82px", fontSize: "13px" }}
                      />
                    ) : (
                      <RightOutlined
                        style={{ marginLeft: "82px", fontSize: "13px" }}
                      />
                    )}
                  </div>
                  {((item.path === "/" && isMentorDropdownOpen) ||
                    (item.path === "/groups" && isGroupsDropdownOpen)) && (
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

export default AdminSidebar;*/
}

import { Menu } from "antd";
import { useState } from "react";
import {
  UsergroupAddOutlined,
  UserOutlined,
  LogoutOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import collaborative from "../../assets/collaborative.png";
import "./Sidebar.css";
import PropTypes from "prop-types";

const AdminSidebar = ({ collapsed, onLinkClick }) => {
  const iconSize = collapsed ? 23 : 19;
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const rootSubmenuKeys = ["submentor", "subgroup"];

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
            <img src={collaborative} alt="Logo" width="40" height="40" />
            <span className="text-[#9333ea] font-bold">TC&M</span>
          </>
        )}
        {collapsed && (
          <img src={collaborative} alt="Logo" width="34" height="34" />
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
        <Menu.SubMenu
          key="submentor"
          icon={<UserOutlined style={{ fontSize: iconSize }} />}
          title="Mentor"
        >
          <Menu.Item key="register-mentor">
            <Link to="/" onClick={onLinkClick}>
              Register Mentor
            </Link>
          </Menu.Item>
          <Menu.Item key="view-mentor">
            <Link to="/view-mentor " onClick={onLinkClick}>
              View Mentor
            </Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu
          key="subgroup"
          icon={<UsergroupAddOutlined style={{ fontSize: iconSize }} />}
          title="Groups"
        >
          <Menu.Item key="create-group">
            <Link to="/create-groups " onClick={onLinkClick}>
              Create Groups
            </Link>
          </Menu.Item>
          <Menu.Item key="view-group">
            <Link to="/view-groups " onClick={onLinkClick}>
              View Groups
            </Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item
          key="users"
          icon={<UserAddOutlined style={{ fontSize: iconSize }} />}
        >
          <Link to="/registered-users " onClick={onLinkClick}>
            Registered Users{" "}
          </Link>
        </Menu.Item>

        <Menu.Item
          key="logout"
          icon={<LogoutOutlined style={{ fontSize: iconSize }} />}
        >
          <Link to="/signup" onClick={onLinkClick}>
            Log Out
          </Link>
        </Menu.Item>
      </Menu>
    </>
  );
};
AdminSidebar.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  onLinkClick: PropTypes.func.isRequired,
};

export default AdminSidebar;
