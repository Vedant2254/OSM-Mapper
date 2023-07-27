import React from 'react';
import { Footer } from 'antd/es/layout/layout';
import Link from 'antd/es/typography/Link';
import { FaGithub } from 'react-icons/fa6';

export default function ShellFooter() {
  return (
    <Footer style={{ backgroundColor: 'whitesmoke', padding: '1.3rem' }}>
      <Link
        href="https://github.com/Vedant2254/OSM-Mapper"
      >
        <FaGithub size="1.5em" color="black" />
      </Link>
    </Footer>
  );
}
