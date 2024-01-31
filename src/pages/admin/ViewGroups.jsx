import { Table } from "antd";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
];
const data = [
  {
    key: 1,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    description: (
      <div className="flex justify-center">
        <div className="w-7/12 bg-white px-4 rounded-md py-2  ">
          <h1> Mentor Name : </h1>
          <div className="flex gap-5">
            <h1>Members :</h1>
            <span>
              <h1>1 .</h1>
              <h1>2 .</h1>
              <h1>3 .</h1>
              <h1>4 .</h1>
              <h1>5 .</h1>
              <h1>6 .</h1>
            </span>
          </div>

          <h1>Join Code :</h1>
        </div>
      </div>
    ),
  },
  {
    key: 2,
    name: "abe",
  },
];
const ViewGroups = () => (
  <div className="mx-3">
    <h1 className="text-2xl font-semibold pb-5">Created Groups</h1>
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
        rowExpandable: (record) => record.name !== "Not Expandable",
      }}
      dataSource={data}
    />
  </div>
);
export default ViewGroups;
