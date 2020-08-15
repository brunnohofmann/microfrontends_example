import React from 'react';
import { Button, Layout, Typography } from '@antd';
const { Content } = Layout;

const { Title } = Typography;

export default function Root(props) {
  return (
    <Content style={{ padding: '50px' }}>
      <Title level={3}>Hey, I'm a Microfrontend</Title>
      <Title level={4}>I can be mounted as a Registered application or Parcel</Title>
      <p>
        <strong>As a registered application:</strong> I'll be mounted after the #root div on the DOM
      </p>
      <p>
        <strong>As a Parcel:</strong> I'll be mounted whenever you want on the DOM
      </p>

      <Button>{props.name} microfrontend is mounted!</Button>
    </Content>
  );
}
