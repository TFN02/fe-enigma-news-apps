import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, theme } from "antd";

import Homepage from "./pages/homepage";
import Notfound from "./pages/not-found";
import HomePageLayout from "./app/layout/home-page-layout";
import NewsDetail from "./app/page-modules/news/_sub-modules/news-detail";

const { Content } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ width: "auto", minHeight: "100vh" }}>
      <HomePageLayout>
        <Content
          style={{
            padding: 24,
            background: colorBgContainer,
          }}
        >
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/detail/:id" element={<NewsDetail />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Content>
      </HomePageLayout>
    </Layout>
  );
};

export default App;
