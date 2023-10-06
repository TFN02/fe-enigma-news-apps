import React, { FC } from "react";
import { Layout } from "antd";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const Navbar: FC = () => {
  return (
    <div>
      <Header style={{ color: "#fff" }}>
        <Row justify="space-around">
          <Col xs={24} md={12}>
            <h2>News Apps</h2>
          </Col>
          <Col>
            <Link to="/" style={{ color: "#fff" }}>
              Home Page
            </Link>
          </Col>
        </Row>
      </Header>
    </div>
  );
};

export default Navbar;