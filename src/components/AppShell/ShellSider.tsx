import React, { useState } from 'react';
import Sider from 'antd/es/layout/Sider';
import { FaMapLocationDot } from 'react-icons/fa6';
import { Menu } from 'antd';

export default function ShellSider() {
  const [collapsed, setCollapsed] = useState(true);

  return (
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
  );
}
