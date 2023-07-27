import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { FaMapLocationDot } from 'react-icons/fa6';

const {
  Sider, Header, Content, Footer,
} = Layout;

export default function AppShell({ children }: { children: string | JSX.Element } = { children: '' }) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ height: '4.5rem' }} />
      <Layout>
        <Sider
          width="16rem"
          theme="light"
          collapsed={collapsed}
          onClick={() => setCollapsed(!collapsed)}
        >
          <Menu
            items={[
              {
                key: 'map',
                label: 'Map',
                icon: <FaMapLocationDot />,
              },
            ]}
            defaultSelectedKeys={['map']}
          />
        </Sider>
        <Layout>
          <Content style={{ backgroundColor: 'lightgreen' }}>
            {children}
          </Content>
          <Footer style={{ backgroundColor: 'whitesmoke' }} />
        </Layout>
      </Layout>
    </Layout>
  );
}
