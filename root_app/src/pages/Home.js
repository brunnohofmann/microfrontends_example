import React from 'react';
import { Button, Col, Layout, Row, Typography } from '@antd';
import { Link } from 'react-router-dom';

const { Content } = Layout;
const { Title } = Typography;

export default () => (
  <Content style={{ padding: '50px' }}>
    <Title level={3}>This is the Main app</Title>
    <Title level={4}>Choose an option below</Title>
    <Row gutter={16}>
      <Col className="gutter-row">
        <Link to="/users">
          <Button>Go to Registered Application microfrontend</Button>
        </Link>
      </Col>
      <Col className="gutter-row">
        <Link to="/parcels/first_option">
          <Button>Go to Parcel microfrontend (option 1)</Button>
        </Link>
      </Col>
      <Col className="gutter-row">
        <Link to="/parcels/second_option">
          <Button>Go to Parcel microfrontend (option 2)</Button>
        </Link>
      </Col>
    </Row>
  </Content>
);
