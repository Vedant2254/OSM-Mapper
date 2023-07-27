import React from 'react';
import { Header } from 'antd/es/layout/layout';
import { Button, Col, Row } from 'antd';
import { BiSolidUser } from 'react-icons/bi';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import FormInput from '../FormInput';

export default function ShellHeader() {
  return (
    <Header style={{ backgroundColor: 'white', height: '4.5rem' }}>
      <Row>
        <Col span={6}>
          <div className="branding-text">
            OSM Mapper
          </div>
        </Col>
        <Col span={12}><FormInput /></Col>
        <Col span={6}>
          <div className="profile-control-container">
            <Button type="primary" className="profile-control-btn">
              <FiLogIn
                size="1.2em"
                className="profile-control-btn-icon"
              />
              Login
            </Button>
            <Button type="primary" className="profile-control-btn">
              <FiLogOut
                size="1.2em"
                className="profile-control-btn-icon"
              />
              Logout
            </Button>
            <Button type="primary" className="profile-control-btn">
              <BiSolidUser
                size="1.2em"
                className="profile-control-btn-icon"
              />
              Profile
            </Button>
          </div>
        </Col>
      </Row>
    </Header>
  );
}
