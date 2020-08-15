import React from 'react';
import { Layout, Typography } from '@antd';
import { mountRootParcel } from 'single-spa';
import Parcel from 'single-spa-react/lib/esm/parcel';

const { Content } = Layout;
const { Title } = Typography;

export default () => (
  <Content style={{ padding: '50px' }}>
    <Title level={3}>This page will load the microfrontend as a Parcel using another lib</Title>
    <Title level={4}>You can load id whenever you want.</Title>
    <p>
      This page use the{' '}
      <a href="https://github.com/single-spa/single-spa-react" target="_blank">
        single-spa-react
      </a>{' '}
      library to mount the microfrontend
    </p>

    <Parcel
      wrapStyle={{ border: '1px dashed red' }}
      mountParcel={mountRootParcel}
      wrapWith="div"
      config={System.import('@hofmann/users')}
    />
  </Content>
);
