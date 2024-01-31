import { PlusOutlined } from "@ant-design/icons";
import { Input, Space, Select, Button, Table } from "antd";
import { AppstoreFilled, UnorderedListOutlined } from "@ant-design/icons";
import Grid from "./Grid";
import { useState } from "react";

const columns = [
  {
    title: "Project Name",
    dataIndex: "projectname",
    key: "projectname",
    ellipsis: true,
  },
  {
    title: "Dates",
    dataIndex: "date",
    key: "date",
    ellipsis: true,
  },
  {
    title: "Task Progress",
    dataIndex: "taskprogress",
    key: "taskprogress",
    ellipsis: true,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    ellipsis: true,
  },
  {
    title: "Team",
    dataIndex: "team",
    key: "team",
    ellipsis: true,
  },
];
const data = [
  {
    key: 1,
    projectname: "Web Development",
    date: 32,
    taskprogress: "New York No. 1 Lake Park",
    status: "My name ",
    team: "hey",
    description: "heyyy everyone",
  },
  {
    key: 2,
    projectname: "Jim Green",
    date: 42,
    taskprogress: "London No. 1 Lake Park",
    status: "My name ",
    team: "yoo",
    description: "heyyy everyone",
  },
  {
    key: 3,
    projectname: "Not Expandable",
    date: 29,
    taskprogress: "Jiangsu No. 1 Lake Park",
    status: "This not expandable",
    team: "hey",
    description: "heyyy everyone",
  },

  {
    key: 4,
    projectname: "Not Expandable",
    date: 29,
    taskprogress: "Jiangsu No. 1 Lake Park",
    status: "This not expandable",
    team: "hey",
    description: "heyyy everyone",
  },
  {
    key: 5,
    projectname: "Not Expandable",
    date: 29,
    taskprogress: "Jiangsu No. 1 Lake Park",
    status: "This not expandable",
    team: "hey",
    description: "heyyy everyone",
  },
  {
    key: "addButton",
    projectname: (
      <Button style={{ height: "50px" }} icon={<PlusOutlined />}>
        Add Project
      </Button>
    ),
    date: null,
    taskprogress: null,
    status: null,
    team: null,
    description: null,
  },
];

const { Search } = Input;

const ProjectOverview = () => {
  const [isGridView, setIsGridView] = useState(false);

  return (
    <div>
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "larger",
          marginLeft: "24px",
          padding: "15px 0",
        }}
      >
        Project List
      </h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: "21px",
          marginRight: "21px",
        }}
      >
        <Space direction="vertical">
          <Search
            placeholder="Search Project"
            allowClear
            onSearch={(value, _e, info) => console.log(info?.source, value)}
            style={{ width: 200 }}
          />
        </Space>

        <Space style={{ marginLeft: "27em", fontSize: "large" }}>
          <button
            onClick={() => setIsGridView(false)}
            style={{
              backgroundColor: !isGridView ? "#cfa8ff" : "transparent",
              color: !isGridView ? "white" : "grey",
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
              color: isGridView ? "white" : "grey",
              width: "40px",
              height: "40px",
              borderRadius: "3px",
            }}
          >
            <AppstoreFilled />
          </button>
        </Space>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Filter"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={[
            { value: "1", label: "In Progress" },
            { value: "2", label: "Completed" },
            { value: "3", label: "Pending" },
            { value: "4", label: "Modified" },
            { value: "5", label: "Cancelled" },
          ]}
        />
      </div>

      {isGridView ? (
        <Grid data={data} />
      ) : (
        <Table
          columns={columns}
          expandable={{
            expandedRowRender: (record) => (
              <p style={{ margin: 0 }}>{record.description}</p>
            ),
            rowExpandable: (record) => record.key !== "addButton",
          }}
          dataSource={data}
          pagination={false}
          style={{
            margin: "21px",
            boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
            marginTop: "20px",
            borderRadius: "10px",
          }}
          scroll={{ x: true, y: 300 }}
        />
      )}
    </div>
  );
};

export default ProjectOverview;
