import { useState } from "react";
import {
  MoreOutlined,
  UnorderedListOutlined,
  AppstoreFilled,
  PlusOutlined,
} from "@ant-design/icons";
import "./Team.css";
import { Avatar, Button, Input } from "antd";
import Grid from "./Grid";

const { Search } = Input;

const onSearchHandler = (value) => {
  console.log("search:", value);
};

const Team = () => {
  const [isGridView, setIsGridView] = useState(false);

  return (
    <div className="team-page">
      <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>TEAM</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearchHandler}
          style={{
            width: "200px",
            height: "40px",
          }}
        />
        <div style={{ marginLeft: "30em" }}>
          <button
            onClick={() => setIsGridView(false)}
            style={{
              backgroundColor: !isGridView ? "#cfa8ff" : "transparent",
              color: !isGridView ? "white" : "black",
              width: "40px",
              height: "40px",
              borderRadius: "3px",
            }}
          >
            <UnorderedListOutlined />
          </button>
          <button
            onClick={() => setIsGridView(true)}
            style={{
              backgroundColor: isGridView ? "#cfa8ff" : "transparent",
              color: isGridView ? "white" : "black",
              width: "40px",
              height: "40px",
              borderRadius: "3px",
            }}
          >
            <AppstoreFilled />
          </button>
        </div>

        <Button
          style={{
            width: "180px",
            height: "40px",
            fontWeight: "bolder",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            backgroundColor: "purple",
          }}
        >
          {" "}
          <PlusOutlined />
          Add Member
        </Button>
      </div>
      {isGridView ? (
        <Grid />
      ) : (
        <>
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
              <h2>tasks</h2>
            </div>
            <button>
              <MoreOutlined style={{ marginLeft: "200px", fontSize: "20px" }} />
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
              <h2>tasks</h2>
            </div>
            <button>
              <MoreOutlined style={{ marginLeft: "200px", fontSize: "20px" }} />
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
              <h2>tasks</h2>
            </div>
            <button>
              <MoreOutlined style={{ marginLeft: "200px", fontSize: "20px" }} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Team;
