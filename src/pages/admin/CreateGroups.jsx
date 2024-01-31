import { Select, Button, Input, Space, Divider } from "antd";

const CreateGroups = () => {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  const memberOptions = [
    {
      value: "Apples",
      label: "Apples",
    },
    {
      value: "Nails",
      label: "Nails",
    },
    {
      value: "Bananas",
      label: "Bananas",
    },
    {
      value: "Helicopters",
      label: "Helicopters",
    },
  ];
  return (
    <div className=" ">
      <div
        className="bg-white h-92 
     border shadow m-3 rounded-lg "
      >
        <h1 className="  mt-4 flex justify-center  text-xl font-semibold">
          Group
        </h1>
        <Divider />
        <div className="px-6 py-4 text-lg">
          Mentor Name :
          <Select
            className="w-60 ml-4"
            showSearch
            placeholder="Select a mentor"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={filterOption}
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "tom",
                label: "Tom",
              },
            ]}
          />
        </div>
        <div className="px-6 py-4 text-lg">
          Members :
          <Select
            mode="multiple"
            className="w-96 ml-4"
            placeholder="Select members"
            options={memberOptions}
          />
        </div>
        <div className="flex justify-around ">
          <div className="text-center ">
            <h1 className="text-lg pb-1">Names</h1>
            <span>
              <h1 className="py-1 ">1.</h1>
              <h1 className="py-1 ">2.</h1>
              <h1 className="py-1 ">3.</h1>
              <h1 className="py-1 ">4.</h1>
              <h1 className="py-2 ">5.</h1>
              <h1 className="py-1 ">6.</h1>
            </span>
          </div>
          <div className="text-center">
            <h1 className="text-lg pb-1">Educational Level</h1>
            <span>
              <h1 className="py-1 ">ksjkj</h1>
              <h1 className="py-1 ">ksjkj</h1>
              <h1 className="py-1 ">ksjkj</h1>
              <h1 className="py-1 ">ksjkj</h1>
              <h1 className="py-1 ">ksjkj</h1>
              <h1 className="py-1 ">ksjkj</h1>
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center mt-2">
          <Button
            className="w-48 bg-purple-200 text-white"
            htmlType="reset"
            size="large"
          >
            Reset
          </Button>
        </div>
        <div className="flex justify-center my-6">
          <h1 className="text-lg">Generate Code : </h1>
          <Space.Compact
            style={{
              width: "20rem",
              marginLeft: "10px",
            }}
          >
            <Input />
            <Button className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white">
              Generate
            </Button>
          </Space.Compact>
        </div>
        <div className="flex justify-center ">
          <Button className="bg-gradient-to-r from-purple-700 via-purple-600 to-pink-400 text-white w-80 mb-4 p-6 flex items-center justify-center font-bold text-lg">
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateGroups;
