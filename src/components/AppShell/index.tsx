import React from 'react';
import { Layout } from 'antd';
import ShellSider from './ShellSider';
import ShellHeader from './ShellHeader';
import ShellFooter from './ShellFooter';

const { Content } = Layout;

export default function AppShell({ children }: { children: string | JSX.Element | JSX.Element[] } = { children: '' }) {
  // const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <ShellHeader />
      <Layout>
        <ShellSider />
        <Layout>
          <Content style={{ backgroundColor: 'whitesmoke', position: 'relative' }}>
            {children}
          </Content>
          <ShellFooter />
        </Layout>
      </Layout>
    </Layout>
  );
}
