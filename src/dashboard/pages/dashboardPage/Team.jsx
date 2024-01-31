import { Table, Tag } from "antd";
import { useState } from "react";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Task",
    dataIndex: "task",
    key: "task",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => (
          <Tag color="blue" key={tag}>
            {tag}
          </Tag>
        ))}
      </>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "web design",
    role: 32,
    task: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Another project",
    role: 42,
    task: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Yet another project ",
    role: 55,
    task: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const App = () => {
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
      <Table
        columns={columns}
        dataSource={getDataForCurrentPage()}
        scroll={{ x: "max-content" }}
        title={() => "Team Members "}
        style={{
          width: "60%",
          marginTop: "26px",
          marginLeft: "26px",
          boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          marginBottom: "30px",
        }}
        pagination={paginationConfig}
      />
    </div>
  );
};

export default App;
