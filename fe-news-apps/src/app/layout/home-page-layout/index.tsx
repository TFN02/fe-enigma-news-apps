import React from "react";
import { Flex } from "antd";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const HomePageLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <Flex vertical style={{width: "auto"}}>
      <Navbar />
      <Flex style={{padding: "20px 50px", height: "100vh"}}>{children}</Flex>
      <Footer />
    </Flex>
  );
};

export default HomePageLayout;
