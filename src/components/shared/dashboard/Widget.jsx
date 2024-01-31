import React, { useState } from "react";
import "./Widget.css";
import {
  FolderTwoTone,
  UnorderedListOutlined,
  TeamOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

const Widget = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const renderCustomCard = (
    title,
    icon,
    value,
    completed,
    iconBackgroundColor,
    iconColor,
    index
  ) => {
    const isHovered = index === hoveredCard;

    return (
      <div
        className={`projects-ui-card common-card ${isHovered ? "hovered" : ""}`}
        key={title}
        onMouseEnter={() => handleCardHover(index)}
        onMouseLeave={handleCardLeave}
      >
        <div className="frame">
          <div className="text-wrapper">{title}</div>
          <div
            className="project-icon"
            style={{ backgroundColor: iconBackgroundColor }}
          >
            <div
              className="briefcase"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {icon &&
                React.cloneElement(icon, { style: { color: iconColor } })}
            </div>
          </div>
        </div>
        <div className="div">
          <div className="div-wrapper">
            <div className="text-wrapper-2">{value}</div>
          </div>
          <div className="frame-2">
            <div className="text-wrapper-3">{completed}</div>
            <div className="text-wrapper-4">Completed</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="dash">
      <div className="box">
        <div className="content-p-c">
          <span className="project">Project</span>
          <Button style={{ backgroundColor: "white" }} className="btn-project">
            Create New Project
          </Button>
        </div>
      </div>

      <div className="dashboard-cards">
        {renderCustomCard(
          "Projects",
          <FolderTwoTone />,
          "18",
          "2",
          "#E0DCFE",
          "#624BFF",
          0
        )}
        {renderCustomCard(
          "Active Task",
          <UnorderedListOutlined />,
          "132",
          "28",
          "#E7FAFE",
          "#0DCAF0",
          1
        )}
        {renderCustomCard(
          "Teams",
          <TeamOutlined />,
          "12",
          "1",
          "#FBEBEC",
          "#DC3545",
          2
        )}
        {renderCustomCard(
          "Productivity",
          <RadarChartOutlined />,
          "76%",
          "5%",
          "#EAF6EC",
          "#28A745",
          3
        )}
      </div>
    </div>
  );
};

export default Widget;
