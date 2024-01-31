import { PlusOutlined } from "@ant-design/icons";
import { Input, Space, Select, Button, Table } from "antd";
import { AppstoreFilled, BarsOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "Project Name",
    dataIndex: "projectname",
    key: "projectname",
  },
  {
    title: "Dates",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Task Progress",
    dataIndex: "taskprogress",
    key: "taskprogress",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Team",
    dataIndex: "team",
    key: "team",
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

const onSearch = (value, _e, info) => console.log(info?.source, value);
const { Search } = Input;

const ProjectList = () => (
  <div>
    <h1
      style={{
        fontWeight: "bold",
        fontSize: "larger",
        display: "flex",

        marginLeft: "26px",
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
      }}
    >
      <Space direction="vertical">
        <Search
          placeholder="Search Project"
          allowClear
          onSearch={onSearch}
          style={{
            width: 200,
            marginLeft: "26px",
          }}
        />
      </Space>
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          marginLeft: "25em",
          fontSize: "large",
          padding: "5px 0",
        }}
      >
        <button>
          <AppstoreFilled />
        </button>

        <button>
          <BarsOutlined />
        </button>
      </div>

      <Select
        showSearch
        style={{
          width: 200,
          marginRight: "26px",
        }}
        placeholder="Filter"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={[
          {
            value: "1",
            label: "In Progress",
          },
          {
            value: "2",
            label: "Completed",
          },
          {
            value: "3",
            label: "Pending",
          },
          {
            value: "4",
            label: "Modifyed",
          },

          {
            value: "5",
            label: "Cancelled",
          },
        ]}
      />
    </div>

    <Table
      columns={columns}
      expandable={{
        expandedRowRender: (record) => (
          <p
            style={{
              margin: 0,
            }}
          >
            {record.description}
          </p>
        ),
        rowExpandable: (record) => record.key !== "addButton",
      }}
      dataSource={data}
      pagination={false}
      style={{
        margin: "26px",
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
        marginTop: "20px",
        borderRadius: "10px",
      }}
    />
  </div>
);
export default ProjectList;
