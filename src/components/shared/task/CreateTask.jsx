import { useState } from "react";
import { Button, Modal, Select, TextArea, Tag, DatePicker, Input } from "antd";
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
  (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const CreateTask = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const options = [
    {
      value: "gold",
    },
    {
      value: "lime",
    },
    {
      value: "green",
    },
    {
      value: "cyan",
    },
  ];
  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          marginRight: 3,
        }}
      >
        {label}
      </Tag>
    );
  };
  return (
    <div>
      <Button onClick={showModal}>Create Tasks</Button>
      <Modal
        title="Add Task"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={500}
      >
        <div>
          <h1>From Project : </h1>
          <Select
            showSearch
            placeholder="Select a person"
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
        <div>
          <h1>Task to be Assigned : </h1>
          <TextArea
            showCount
            maxLength={100}
            onChange={onChange}
            placeholder="can resize"
          />
        </div>
        <div>
          <h1>Assigned To : </h1>
          <Select
            mode="multiple"
            tagRender={tagRender}
            defaultValue={["gold", "cyan"]}
            style={{
              width: "100%",
            }}
            options={options}
          />
        </div>
        <div>
          <span>
            <h1>Due Date : </h1>
            <DatePicker />
          </span>
          <span>
            <h1>Status : </h1> <Input />
          </span>
        </div>
        <div>
          <span>
            <h1>Priority : </h1>
            <Input />
          </span>
          <span>
            <h1>Progress :</h1>
            <Input />
          </span>
        </div>
      </Modal>
    </div>
  );
};

export default CreateTask;
