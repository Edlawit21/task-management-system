import { Table, Tag, Button, Progress, Avatar, Tooltip } from "antd";

const columns = [
  {
    title: "Project name",
    dataIndex: "projectname",
    key: "projectname",
  },
  {
    title: "Project Lead",
    dataIndex: "projectlead",
    key: "projectlead",
  },
  {
    title: "Assignee",
    dataIndex: "assignee",
    key: "assignee",
  },
  {
    title: "Progress",
    dataIndex: "progress",
    key: "progress",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = "defaultColor";

          if (tag === "InProgress") {
            color = "blue";
          } else if (tag === "Completed") {
            color = "green";
          } else if (tag === "Canceled") {
            color = "red";
          }

          return (
            <Tag color={color} key={tag}>
              {tag}
            </Tag>
          );
        })}
      </>
    ),
  },

  {
    title: "Due Date",
    key: "duedate",
    dataIndex: "duedate",
  },
];

const data = [
  {
    key: "1",
    projectname: "web design",
    progress: <Progress percent={30} status="active" />,
    duedate: "11/02/23023",
    tags: ["InProgress"],
    projectlead: "selam nega",
    assignee: (
      <Avatar.Group
        maxCount={3}
        size="medium"
        maxStyle={{
          color: "#f56a00",
          backgroundColor: "#fde3cf",
        }}
      >
        <Avatar
          style={{
            backgroundColor: "#a57a22",
          }}
        />
        <Avatar
          style={{
            backgroundColor: "#f56a00",
          }}
        >
          K
        </Avatar>
        <Tooltip title="Ant User" placement="top">
          <Avatar
            style={{
              backgroundColor: "#87d068",
            }}
          />
        </Tooltip>
        <Avatar
          style={{
            backgroundColor: "#1677ff",
          }}
        />
      </Avatar.Group>
    ),
  },
  {
    key: "2",
    projectname: "Another project",
    progress: (
      <Progress style={{ width: "90px" }} percent={50} status="active" />
    ),
    duedate: "11/02/23",
    tags: ["Canceled"],
    projectlead: "selam nega",
    assignee: (
      <Avatar.Group
        maxCount={2}
        size="medium"
        maxStyle={{
          color: "#f56a00",
          backgroundColor: "#fde3cf",
        }}
      >
        <Avatar
          style={{
            backgroundColor: "#a57a22",
          }}
        />
        <Avatar
          style={{
            backgroundColor: "#f56a00",
          }}
        >
          K
        </Avatar>
        <Tooltip title="Ant User" placement="top">
          <Avatar
            style={{
              backgroundColor: "#87d068",
            }}
          />
        </Tooltip>
        <Avatar
          style={{
            backgroundColor: "#1677ff",
          }}
        />
      </Avatar.Group>
    ),
  },
  {
    key: "3",
    projectname: "Yet another project ",
    progress: <Progress percent={100} />,
    duedate: "11/02.23",
    tags: ["Completed"],
    projectlead: "selam nega",
    assignee: (
      <Avatar.Group
        maxCount={2}
        size="medium"
        maxStyle={{
          color: "#f56a00",
          backgroundColor: "#fde3cf",
        }}
      >
        <Avatar
          style={{
            backgroundColor: "#a57a22",
          }}
        />
        <Avatar
          style={{
            backgroundColor: "#f56a00",
          }}
        >
          K
        </Avatar>
        <Tooltip title="Ant User" placement="top">
          <Avatar
            style={{
              backgroundColor: "#87d068",
            }}
          />
        </Tooltip>
        <Avatar
          style={{
            backgroundColor: "#1677ff",
          }}
        />
      </Avatar.Group>
    ),
  },
];

const ActiveProject = () => {
  const renderFooter = () => (
    <div style={{ textAlign: "center", borderRadius: "10px" }}>
      <Button
        style={{ borderColor: "#6b25b1", fontWeight: "bold", color: "#6b25b1" }}
      >
        View All
      </Button>
    </div>
  );

  return (
    <div
      style={{
        borderRadius: "10px",
        overflow: "hidden",
        width: "60%",
        marginLeft: "26px",
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ x: "max-content" }}
        title={() => (
          <span style={{ fontWeight: "bold", fontSize: "large" }}>
            Active Projects
          </span>
        )}
        footer={renderFooter}
        style={{
          borderRadius: "inherit",
        }}
      />
    </div>
  );
};

export default ActiveProject;
