import React from "react";
import {
  Modal,
  Form,
  Input,
  DatePicker,
  Select,
  Button,
  Divider,
  Row,
  Col,
  FormInstance,
} from "antd";
import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  TeamOutlined,
  CalendarOutlined,
  LinkOutlined,
  TagsOutlined,
  CheckCircleOutlined,
  PictureOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const { Option } = Select;

interface AddLeadModalProps {
  title: string;
  button_title: string;
  form: FormInstance;
  visible: boolean;
  onCancel: () => void;
  onAdd: (values: any) => void;
}

export default function AddLeadModal({
  title = "add lead",
  button_title = "Add Lead",
  form,
  visible,
  onCancel,
  onAdd,
}: AddLeadModalProps) {
  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      onAdd(values);
      //   form.resetFields();
    } catch {
      // Validation failed
    }
  };

  return (
    <Modal
      title={
        <div className="flex items-center text-2xl font-bold space-x-2">
          <UserOutlined className="text-blue-500" />
          <span>{title}</span>
        </div>
      }
      open={visible}
      onCancel={() => {
        form.resetFields();
        onCancel();
      }}
      onOk={handleOk}
      footer={[
        <Button
          key="back"
          onClick={() => {
            form.resetFields();
            onCancel();
          }}
        >
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          {button_title} <CheckCircleOutlined />
        </Button>,
      ]}
      className="rounded-lg"
      width={700}
      bodyStyle={{ padding: 0 }}
    >
      <div className="bg-white rounded-xl shadow-lg flex flex-col p-5 border border-gray-100 hover:shadow-2xl transition-shadow duration-200">
        <div className="p-3">
          <Form
            form={form}
            layout="vertical"
            name="add_lead_form"
            initialValues={{
              status: "New",
              assigned_agent: "Admin",
            }}
          >
            {/* Lead Details */}
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label={<span className="font-medium">Name</span>}
                  rules={[{ required: true, message: "Please enter the name" }]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    placeholder="Lead Name"
                    size="large"
                    className="rounded-lg"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="phone"
                  label={<span className="font-medium">Phone</span>}
                  rules={[
                    {
                      required: true,
                      message: "Please enter the phone number",
                    },
                    {
                      pattern: /^[6-9]\d{9}$/,
                      message: "Enter a valid 10-digit Indian phone number",
                    },
                  ]}
                >
                  <Input
                    prefix={<PhoneOutlined />}
                    placeholder="9876543210"
                    size="large"
                    className="rounded-lg"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="email"
                  label={<span className="font-medium">Email</span>}
                  rules={[
                    { required: true, message: "Please enter the email" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                >
                  <Input
                    prefix={<MailOutlined />}
                    placeholder="example@mail.com"
                    size="large"
                    className="rounded-lg"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="nextReminder"
                  label={<span className="font-medium">Follow-up Date</span>}
                  rules={[{ required: true, message: "Please select a date" }]}
                >
                  <DatePicker
                    style={{ width: "100%" }}
                    placeholder="Select date"
                    suffixIcon={<CalendarOutlined />}
                    size="large"
                    className="rounded-lg"
                  />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name="leadSource"
                  label={<span className="font-medium">Source</span>}
                  rules={[
                    {
                      required: false,
                      message: "Please enter the source",
                    },
                  ]}
                >
                  <Input
                    prefix={<LinkOutlined />}
                    placeholder="Source"
                    size="large"
                    className="rounded-lg"
                  />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name="assignedToId"
                  label={<span className="font-medium">Assigned Agent</span>}
                  rules={[
                    { required: false, message: "Please select an agent" },
                  ]}
                >
                  <Select
                    size="large"
                    placeholder="Select agent"
                    suffixIcon={<TagsOutlined />}
                    className="rounded-lg"
                  >
                    <Option value="admin">Admin</Option>
                    <Option value="user">User</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name="status"
                  label={<span className="font-medium">Stage</span>}
                  rules={[{ required: false, message: "Please select  stage" }]}
                >
                  <Select
                    size="large"
                    placeholder="Select Stage"
                    suffixIcon={<TagsOutlined />}
                    className="rounded-lg"
                  >
                    <Option value="New">New</Option>
                    <Option value="Contacted">Contacted</Option>
                    <Option value="Interested">Interested</Option>
                    <Option value="Demo">Demo</Option>
                    <Option value="Converted">Converted</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item
                  name="address"
                  label={<span className="font-medium">Address</span>}
                  rules={[
                    { required: false, message: "Please enter the address" },
                  ]}
                >
                  <Input.TextArea
                    // prefix={<HomeOutlined />}
                    placeholder="Street, City, State, ZIP"
                    autoSize={{ minRows: 2, maxRows: 4 }}
                    className="rounded-lg"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </Modal>
  );
}
