import React from 'react';
import { Header } from 'antd/es/layout/layout';
import { Col, Row } from 'antd';
import FormInput from '../FormInput';

export default function ShellHeader() {
  return (
    <Header style={{ backgroundColor: 'white', height: '4.5rem' }}>
      <Row>
        <Col span={6}><div className="branding-text">OSM Mapper</div></Col>
        <Col span={12} />
        <Col span={6}><FormInput /></Col>
      </Row>
    </Header>
  );
}
