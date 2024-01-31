import { Button, Form, Input, Row, Col, Divider, Radio } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const RegisterMentor = () => {
  return (
    <div className=" m-3 border bg-white rounded-2xl">
      <span className="flex justify-center pt-5  text-2xl font-bold ">
        Register Mentor
      </span>
      <Divider />
      <Form
        className="m-auto px-6"
        name="basic"
        layout="vertical"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 26,
        }}
        style={{
          maxWidth: 1000,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={[16]}>
          <Col span={12}>
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                {
                  required: true,
                  message: "Please input first name!",
                },
              ]}
            >
              <Input size="large" placeholder="Firstname" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "Please input last name!",
                },
              ]}
            >
              <Input size="large" placeholder="Lastname" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[
                {
                  required: true,
                  message: "Please select gender!",
                },
              ]}
            >
              <Radio.Group>
                <Radio value={1}>Male</Radio>
                <Radio value={2}>Female</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please input a valid email address!",
                },
              ]}
            >
              <Input size="large" placeholder="Enter Email" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Profession"
              name="profession"
              rules={[
                {
                  required: true,
                  message: "Please input profession!",
                },
              ]}
            >
              <Input size="large" placeholder="Enter Profession" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: "Please input phone number!",
                },
                {
                  pattern: /^[0-9]+$/,
                  message: "Please enter only numeric values.",
                },
              ]}
            >
              <Input size="large" placeholder="Enter Phonenumber" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Reset :" name="reset">
              <Button
                className="w-48 bg-purple-200"
                htmlType="reset"
                size="large"
              >
                Reset
              </Button>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item className="flex justify-center items-center ">
          <Button
            size="large"
            htmlType="submit"
            style={{
              background: "linear-gradient(to right, #8d4bff, #bd3dde)",
              width: "40rem",
              color: "white",
              fontSize: "large",
              fontWeight: "bold",
              letterSpacing: "3px",
            }}
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterMentor;
