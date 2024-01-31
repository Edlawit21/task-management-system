import { useState } from "react";
import { Radio, Table, Tag } from "antd";

const columns = [
  {
    title: "Task Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Assigned To",
    dataIndex: "assignedto",
    key: "assignedto",
  },
  {
    title: "Priority",
    key: "priority",
    dataIndex: "priorityTags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let tagStyle = {
            backgroundColor: "defaultColor",
            color: "white",
          };

          if (tag === "High") {
            tagStyle.backgroundColor = "red";
          } else if (tag === "Medium") {
            tagStyle.backgroundColor = "orange";
          } else if (tag === "Low") {
            tagStyle.backgroundColor = "green";
          }

          return (
            <Tag style={tagStyle} key={tag}>
              {tag}
            </Tag>
          );
        })}
      </>
    ),
  },

  {
    title: "Status",
    key: "status",
    dataIndex: "statusTags",
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
    title: "Deadline",
    dataIndex: "deadline",
    key: "deadline",
  },
];

const data = [
  {
    key: "1",
    name: "web design",
    deadline: 32,
    assignedto: "New York No. 1 Lake Park",
    priorityTags: ["Low"],
    statusTags: ["InProgress"],
  },
  {
    key: "2",
    name: "Another project",
    deadline: 42,
    assignedto: "London No. 1 Lake Park",
    priorityTags: ["High"],
    statusTags: ["Completed"],
  },
  {
    key: "3",
    name: "Yet another project ",
    deadline: 55,
    assignedto: "Sydney No. 1 Lake Park",
    priorityTags: ["Medium"],
    statusTags: ["Canceled"],
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};

const App = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const handleTableChange = (pagination) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };

  const paginationConfig = {
    total: data.length,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
    defaultPageSize: 20,
    defaultCurrent: 1,
    current: currentPage,
    pageSize: pageSize,
    onChange: handleTableChange,
  };

  const getDataForCurrentPage = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  };

  return (
    <div>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      ></Radio.Group>

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={getDataForCurrentPage()}
        scroll={{ x: "max-content" }}
        title={() => (
          <span style={{ fontWeight: "bold", fontSize: "large" }}>Tasks</span>
        )}
        style={{
          marginLeft: "26px",
          width: "91.4%",
          marginTop: "3px",
          borderRadius: "5px",
          boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
        }}
        pagination={paginationConfig}
      />
    </div>
  );
};

export default App;
