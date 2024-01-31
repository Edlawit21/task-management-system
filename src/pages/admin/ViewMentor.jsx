import { Table, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const columns = [
  {
    title: "Firstname",
    dataIndex: "firstname",
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
    title: "Lastname",
    dataIndex: "lastname",
    filters: [
      {
        text: "Beso",
        value: "Beso",
      },
      {
        text: "Bela",
        value: "Bela",
      },
    ],
    onFilter: (value, record) => record.profession.startsWith(value),
    filterSearch: true,
  },
  {
    title: "Gender",
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
    onFilter: (value, record) => record.gender.startsWith(value),
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Profession",
    dataIndex: "profession",
    filters: [
      {
        text: "Programmer",
        value: "Programmer",
      },
      {
        text: "Tester",
        value: "Tester",
      },
    ],
    onFilter: (value, record) => record.profession.startsWith(value),
    filterSearch: true,
  },
  {
    title: "Phonenumebr",
    dataIndex: "phonenumber",
    sorter: (a, b) => a.phonenumber - b.phonenumber,
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
    firstname: "John Brown",
    lastname: "emm",
    gender: "Women",
    email: "abe@gmail.com",
    profession: "programmer",
    phonenumber: "0993665",
  },
  {
    key: "1",
    firstname: "John Brown",
    lastname: "emm",
    gender: "Male",
    email: "kebe@gmial.com",
    profession: "coder",
    phonenumber: "0993665",
  },
  {
    key: "1",
    firstname: "John Brown",
    lastname: "emm",
    gender: "Male",
    email: "chale@gmail.com",
    profession: "tester",
    phonenumber: "0993665",
  },
  {
    key: "1",
    firstname: "John Brown",
    lastname: "emm",
    gender: "Women",
    email: "abe@gmail.com",
    profession: "coder",
    phonenumber: "0993665",
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const ViewMentor = () => {
  return (
    <div className="m-3">
      <div className="flex justify-between ">
        <h1 className="text-2xl font-semibold mb-6">Registered Mentors</h1>
        <Button className="text-md text-white font-semibold bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500">
          <Link to="/">Register Mentor</Link>
        </Button>
      </div>
      <div className="bg-white rounded-xl ">
        <Table
          columns={columns}
          dataSource={data}
          onChange={onChange}
          style={{
            boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            overflowX: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default ViewMentor;
