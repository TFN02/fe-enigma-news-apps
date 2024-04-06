import React from "react";
import { Layout, Typography } from "antd";
import { Col, Row } from "antd";

const Navbar: React.FC = () => {
  const { Header } = Layout;
  const { Title } = Typography;

  return (
    <Header style={{ color: "#fff", width: "100%" }}>
      <Row justify="center">
        <Col xs={24} md={24}>
          <Title style={{ fontSize: "24px", color: "white", textAlign: "center", padding: "15px 0" }}>News Apps</Title>
        </Col>
      </Row>
    </Header>
  );
};

export default Navbar;
