import { Flex, Typography } from "antd";
import React from "react";

const NewsEmpty: React.FC = () => {
  const { Text } = Typography;

  return (
    <Flex vertical style={{ justifyContent: "center", alignItems: "center" , height: "80vh"}}>
      <Text style={{ fontSize: "30px", fontWeight: 600 }}>
        Something wrong :(
      </Text>
      <Text style={{fontSize: "16px"}}>Please check your API key at config/api-key</Text>
    </Flex>
  );
};

export default NewsEmpty;
