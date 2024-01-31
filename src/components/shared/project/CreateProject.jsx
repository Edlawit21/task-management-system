import { Form, Input, DatePicker, Select, Upload } from "antd";
import { Component, createRef } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module-react";
import ImgCrop from "antd-img-crop";
import "./Create.css";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

Quill.register("modules/imageResize", ImageResize);

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: "" };
    this.editorRef = createRef();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
    console.log(html);
  }

  render() {
    return (
      <ReactQuill
        ref={this.editorRef}
        theme={this.state.theme}
        onChange={this.handleChange}
        value={this.state.editorHtml}
        modules={Editor.modules}
        formats={Editor.formats}
        bounds={"#root"}
        placeholder={this.props.placeholder}
        className="custom-editor"
        style={{
          width: "44.5em",
          margin: "auto",
          height: "100px",
        }}
      />
    );
  }
}

Editor.modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { align: [] },
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
    [{ color: [] }, { background: [] }],
  ],
  clipboard: {
    matchVisual: false,
  },
  imageResize: {
    modules: ["Resize", "DisplaySize"],
  },
};

Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "align",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
  "background",
];

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const CreateProject = () => {
  const [form] = Form.useForm();

  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    const updatedFileList = newFileList.slice(0, 1);
    setFileList(updatedFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <div className="create-page">
      <div>
        <h1 className="head-create">Create New Project</h1>
        <div className="create-width">
          <Form
            className="inside-form"
            form={form}
            name="validateOnly"
            layout="vertical"
            autoComplete="off"
          >
            <Form.Item
              name="name"
              label="Project Title"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>

          <h1 className="describe">Project Description</h1>
          <Editor placeholder="Write about your Project" />

          <div className="date-picker">
            <div>
              <h1>Start Date</h1>
              <DatePicker
                style={{ width: "300px", marginTop: "6px" }}
                onChange={onChange}
              />
            </div>
            <div>
              <h1>End Date</h1>
              <DatePicker
                style={{ width: "300px", marginTop: "6px" }}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="priority-status">
            <div>
              <h1>Priority</h1>
              <Select
                style={{
                  width: "300px",
                  marginTop: "6px",
                }}
                placeholder="Set Priority"
                onChange={handleChange}
                options={[
                  {
                    value: "high",
                    label: "High",
                  },
                  {
                    value: "medium",
                    label: "Medium",
                  },
                  {
                    value: "low",
                    label: "Low",
                  },
                ]}
              />
            </div>
            <div>
              <h1>Status</h1>
              <Select
                style={{
                  width: "300px",
                  marginTop: "6px",
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "inProgress",
                    label: "In Progress",
                  },
                  {
                    value: "medium",
                    label: "Medium",
                  },
                  {
                    value: "low",
                    label: "Low",
                  },
                ]}
              />
            </div>
          </div>
          <div className="uploder">
            <h1 style={{ marginBottom: "10px" }}>Project Logo</h1>
            <ImgCrop rotationSlider>
              <Upload
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                listType="picture-circle"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
                style={{
                  width: "100px",
                  height: "100px",
                }}
              >
                {fileList.length === 0 && "+ Upload"}
              </Upload>
            </ImgCrop>
          </div>
        </div>
      </div>
      <div className="other-team">
        <div>
          <h1 className="head-member">Members</h1>
          <hr />
          <h2 className="lead">Team lead</h2>
          <Select
            placeholder="select lead"
            style={{
              width: 185,
              marginLeft: "20px",
            }}
            onChange={handleChange}
            options={[
              {
                value: "abebe",
                label: "Abebe",
              },
              {
                value: "belete",
                label: "Belete",
              },
              {
                value: "chala",
                label: "Chala",
              },
            ]}
          />
          <h1 className="team-style">Team Members</h1>
          <div className="team-plus">
            <button>
              <PlusOutlined />
            </button>
          </div>
        </div>
        <div className="other-team2">
          <h1 className="head-member">Tag</h1>
          <hr />
          <h2 className="lead">Categories </h2>
          <Select
            placeholder="select lead"
            style={{
              width: 185,
              marginLeft: "20px",
            }}
            onChange={handleChange}
            options={[
              {
                value: "abebe",
                label: "Abebe",
              },
              {
                value: "belete",
                label: "Belete",
              },
              {
                value: "chala",
                label: "Chala",
              },
            ]}
          />
          <h1 className="team-style">Tags Members</h1>
          <div className="team-plus">
            <button>
              <PlusOutlined />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
