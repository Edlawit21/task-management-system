import { useState } from "react";
import {
  MoreOutlined,
  BarsOutlined,
  AppstoreFilled,
  PlusOutlined,
} from "@ant-design/icons";
import "./Team.css";
import { Avatar, Button, Input, Segmented } from "antd";
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
        <Segmented
          style={{
            padding: "6px",
            backgroundColor: "lightblue",
            marginLeft: "370px",
          }}
          options={[
            {
              value: "List",
              icon: <BarsOutlined style={{ fontSize: "18px" }} />,
            },
            {
              value: "Grid",
              icon: <AppstoreFilled style={{ fontSize: "18px" }} />,
            },
          ]}
          onChange={(value) => setIsGridView(value === "Grid")}
          selected={isGridView ? "Grid" : "List"}
        />

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
