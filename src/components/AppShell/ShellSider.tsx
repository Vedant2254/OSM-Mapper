import React, { useState } from 'react';
import Sider from 'antd/es/layout/Sider';
import { FaMapLocationDot } from 'react-icons/fa6';
import { Menu, Space } from 'antd';

export default function ShellSider() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      width="18rem"
      collapsed={collapsed}
      onClick={() => setCollapsed(!collapsed)}
      theme="light"
    >
      <Space direction="horizontal" />
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
  );
}
