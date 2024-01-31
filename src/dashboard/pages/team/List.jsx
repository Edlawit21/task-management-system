import { MoreOutlined } from "@ant-design/icons";
import "./Team.css";
import { Avatar } from "antd";

const List = () => {
  return (
    <div className="team-page">
      <h1 style={{ fontSize: "large" }}>TEAM</h1>
      <div className="search-div">
        <input type="search" placeholder="search team members" />
      </div>
      <div className="the-teams">
        <div>
          <Avatar size={56} />
        </div>
        <div>
          <h1>abebe beso</h1>
          <h2>team leader</h2>
        </div>
        <div className="project-div">
          <h1>11</h1>
          <h2>projects</h2>
        </div>

        <div className="task-line">
          <h1>11</h1>
          <h2>taskes</h2>
        </div>
        <button>
          <MoreOutlined style={{ marginLeft: "200px", fontSize: "25px" }} />
        </button>
      </div>

      <div className="the-teams">
        <div>
          <Avatar size={56} />
        </div>
        <div>
          <h1>abebe beso</h1>
          <h2>team leader</h2>
        </div>
        <div className="project-div">
          <h1>11</h1>
          <h2>projects</h2>
        </div>

        <div className="task-line">
          <h1>11</h1>
          <h2>taskes</h2>
        </div>
        <button>
          <MoreOutlined style={{ marginLeft: "200px", fontSize: "25px" }} />
        </button>
      </div>
    </div>
  );
};

export default List;
