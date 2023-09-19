import React from 'react';
import { Space, Card, Form, Row, Col, Input, Select, DatePicker, TimePicker, Button } from 'antd';
import Table from './Table';

const { Option } = Select;
const { RangePicker } = DatePicker;

function App() {
  return (
    <Space direction="vertical" size="large" style={{ display: 'flex', background: '#f0f2f5' }}>
      <Card title="form_1" style={{ margin: '24px 24px 0 24px' }}>
        <Form layout='vertical' autoComplete="off" initialValues={{remember: true,}}>
          <Row gutter={16}>
            <Col lg={6} md={12} sm={24}>
              <Form.Item label={1}>
                <Input placeholder="inp-1" />
              </Form.Item>
            </Col>
            <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
              <Form.Item label={2}
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}>
                <Input
                  style={{ width: '100%' }}
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="inp-2"
                />
              </Form.Item>
            </Col>
            <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
              <Form.Item label={3}>
                <Select placeholder="inp-3">
                  <Option value="op-1">op-1</Option>
                  <Option value="op-2">op-2</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col lg={6} md={12} sm={24}>
              <Form.Item label={4}>
                <Select placeholder="select-4">
                  <Option value="op-3">op-3</Option>
                  <Option value="op-4">op-4</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
              <Form.Item label={5}>
                <RangePicker placeholder={['Please select', 'Please select']} style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
              <Form.Item label={6}>
                <Select placeholder="select-6">
                  <Option value="op-5">op-5</Option>
                  <Option value="op-6">op-6</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
      <Card title="form_2" style={{ margin: '0 24px 0 24px' }}>
        <Form layout="vertical">
          <Row gutter={16}>
            <Col lg={6} md={12} sm={24}>
              <Form.Item label={1}>
                <Input placeholder="inp-1" />
              </Form.Item>
            </Col>
            <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
              <Form.Item label={2}>
                <Input placeholder="inp-2" />
              </Form.Item>
            </Col>
            <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
              <Form.Item label={3}>
                <Select placeholder="select-3">
                  <Option value="op-7">op-7</Option>
                  <Option value="op-8">op-8</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col lg={6} md={12} sm={24}>
              <Form.Item label={4}>
                <Select placeholder="select-4">
                  <Option value="op-9">op-9</Option>
                  <Option value="op-10">op-10</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
              <Form.Item label={5}>
                <TimePicker
                  placeholder="time-5"
                  style={{ width: '100%' }}
                  getPopupContainer={trigger => trigger.parentNode}
                />
              </Form.Item>
            </Col>
            <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
              <Form.Item label={6}>
                <Select placeholder="select-6">
                  <Option value="op-11">op-11</Option>
                  <Option value="op-12">op-12</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
      <Card title="form-3" style={{ margin: '0 24px 24px 24px' }}>
        <Table />
      </Card>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Space>

  );
}

export default App;
