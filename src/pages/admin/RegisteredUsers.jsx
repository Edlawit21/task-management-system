import { Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
const columns = [
  {
    title: "Username",
    dataIndex: "username",
    filters: [
      {
        text: "Abebe",
        value: "Abebe",
      },
      {
        text: "Kebede",
        value: "Kebede",
      },
      {
        text: "Chala",
        value: "Chala",
      },
    ],

    filterSearch: true,
    onFilter: (value, record) => record.name.startsWith(value),
  },

  {
    title: "Email ",
    dataIndex: "email",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: "Password ",
    dataIndex: "password",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: " Gender",
    dataIndex: "gender",
    filters: [
      {
        text: "Male",
        value: "Male",
      },
      {
        text: "Women",
        value: "Women",
      },
    ],

    onFilter: (value, record) => record.name.startsWith(value),
  },

  {
    title: " Educational Level",
    dataIndex: "educationallevel",
  },
  {
    title: "",
    dataIndex: "edit",

    render: () => (
      <button className="flex   gap-4 ">
        <div>
          <DeleteOutlined />
        </div>

        <div>
          <EditOutlined />
        </div>
      </button>
    ),
  },
];
const data = [
  {
    key: "1",
    username: "John Brown",
    email: 98,
    password: 60,
    gender: "male",
    educationallevel: "1st year",
  },
  {
    key: "2",
    username: "Jim Green",
    email: 98,
    password: 66,
    gender: "women",
    educationallevel: "1st year",
  },
  {
    key: "3",
    username: "Joe Black",
    email: 98,
    password: 90,
    gender: "male",
    educationallevel: "1st year",
  },
  {
    key: "4",
    username: "Jim Red",
    email: 88,
    password: 99,
    gender: "women",
    educationallevel: "1st year",
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const RegisteredUsers = () => {
  return (
    <div className="mx-3">
      <h1 className="text-2xl font-semibold pb-5">Registered Users</h1>
      <Table
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
        }}
        columns={columns}
        dataSource={data}
        onChange={onChange}
      />
      ;
    </div>
  );
};

export default RegisteredUsers;
