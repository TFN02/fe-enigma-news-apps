import React from "react";
import { Layout, theme } from "antd";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Notfound from "./pages/Notfound";
import FooterSection from "./components/FooterSection";

const { Content } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ maxWidth: "auto" , minHeight: "100vh"}}>
      <Navbar />
      <Content
        style={{
          padding: 24,
          background: colorBgContainer,
        }}
      >
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Content>
      <FooterSection />
    </Layout>
  );
};

export default App;
