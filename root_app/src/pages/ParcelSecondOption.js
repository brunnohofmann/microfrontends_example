import React, { useEffect } from 'react';
import { Layout, Spin, Typography } from '@antd';
import { mountRootParcel } from 'single-spa';

const { Content } = Layout;
const { Title } = Typography;

export default () => {
  const divRef = React.createRef();
  useEffect(() => {
    loadMicrofrontend();
  }, []);

  const loadMicrofrontend = () => {
    const customProps = {
      domElement: divRef.current,
    };
    mountRootParcel(() => System.import('@hofmann/users'), customProps);
  };

  return (
    <Content style={{ padding: '50px' }}>
      <Title level={3}>This page will load the microfrontend as a Parcel</Title>
      <Title level={4}>You can load id whenever you want.</Title>
      <p>This page use only single-spa library to mount the microfrontend</p>

      <div style={{ border: '1px dashed blue' }} ref={divRef}>
        <Spin />
      </div>
    </Content>
  );
};
