import { Dropdown, Input, Popover, Avatar } from "antd";
import { MessageOutlined, BellOutlined, UserOutlined } from "@ant-design/icons";

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const items = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
    key: "0",
  },

  {
    type: "divider",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
    key: "1",
  },
];
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const Navbar = () => {
  return (
    <div className="h-[50px] w-full  px-4 flex items-center justify-between ">
      <div className="flex gap-10 text-slate-500">
        <h1 className="text-xl ">Wellcome Leader</h1>
      </div>
      <div className="flex items-center gap-4 mr-2 ">
        <Search
          className="mr-3"
          placeholder="Search "
          onSearch={onSearch}
          allowClear
        />
        <Popover placement="bottomRight" content={content} title="Title">
          <div className="  text-slate-500 mr-2 cursor-pointer">
            <MessageOutlined className="text-xl " />
          </div>
        </Popover>
        <Popover placement="bottomRight" content={content} title="Title">
          <div className="text-slate-500 cursor-pointer  ">
            <BellOutlined className="text-xl " />
          </div>
        </Popover>
        <Dropdown
          className="pl-2 cursor-pointer "
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Avatar size="large" icon={<UserOutlined />} />
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
