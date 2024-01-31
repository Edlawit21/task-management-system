import "./TaskDetail.css";
import {
  CheckCircleFilled,
  FormOutlined,
  LoadingOutlined,
  DeleteFilled,
} from "@ant-design/icons";

import { Table } from "antd";
const columns = [
  {
    title: "Task",
    dataIndex: "task",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: "From Project ",
    dataIndex: "fromproject",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: "Assigneed To ",
    dataIndex: "assigneedto",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: "Due Date",
    dataIndex: "duedate",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: "Status ",
    dataIndex: "status",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: "Priority ",
    dataIndex: "priority",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: "Progress ",
    dataIndex: "Progress",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
];
const data = [
  {
    key: "1",
    task: "John Brown abebe beso bela ",
    fromproject: 98,
    assigneedto: 60,
    duedate: 70,
    status: 70,
    priority: 70,
    progress: 70,
  },
  {
    key: "2",
    name: "Jim Green",
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: "3",
    name: "Joe Black",
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: "4",
    name: "Jim Red",
    chinese: 88,
    math: 99,
    english: 89,
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const TaskDetail = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "20px" }}>
      <h1 style={{ fontSize: "large", fontWeight: "bold" }}>Task List</h1>
      <div className="col2">
        <div className="col2-left">
          <h1 style={{ color: "grey" }}>Total Task</h1>
          <h2
            style={{
              float: "right",
              backgroundColor: "bisque",
              padding: "10px 15px",
              borderRadius: "50%",
              color: "orange",
            }}
          >
            <FormOutlined />
          </h2>
          <h1
            style={{
              marginTop: "5px",
              fontSize: "xx-large",
              fontWeight: "bold",
              color: "orange",
            }}
          >
            100
          </h1>
        </div>
        <div className="col2-right">
          <h1 style={{ color: "grey" }}>Completed</h1>
          <h2
            style={{
              float: "right",
              backgroundColor: "lightgreen",
              padding: "10px 15px",
              borderRadius: "50%",
              color: "green",
            }}
          >
            <CheckCircleFilled />
          </h2>
          <h1
            style={{
              marginTop: "5px",
              fontSize: "xx-large",
              fontWeight: "bold",
              color: "green",
            }}
          >
            40
          </h1>
        </div>
      </div>
      <div className="col2">
        <div className="col2-left">
          <h1 style={{ color: "grey" }}>In Progress</h1>
          <h2
            style={{
              float: "right",
              backgroundColor: "lightblue",
              padding: "10px 15px",
              borderRadius: "50%",
              color: "blue",
            }}
          >
            <LoadingOutlined style={{ fontSize: "larger" }} />
          </h2>
          <h1
            style={{
              marginTop: "5px",
              fontSize: "xx-large",
              fontWeight: "bold",
              color: "blue",
            }}
          >
            20
          </h1>
        </div>
        <div className="col2-right">
          <h1 style={{ color: "grey" }}>Deleted</h1>
          <h2
            style={{
              float: "right",
              backgroundColor: "red",
              padding: "10px 15px",
              borderRadius: "50%",
              color: "wheat",
            }}
          >
            <DeleteFilled />
          </h2>
          <h1
            style={{
              marginTop: "5px",
              fontSize: "xx-large",
              fontWeight: "bold",
              color: "pink",
            }}
          >
            8
          </h1>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        style={{
          overflowX: "scroll",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          margin: "26px 4px  0 4px",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      />
    </div>
  );
};

export default TaskDetail;
