import React from "react";
import { Typography } from "antd";

const Footer:React.FC = () => {
  const { Text } = Typography;
  return <Text style={{textAlign: "center", height:"50px", padding: "15px 0"}}>Copyright by Tegar Faris Nurhakim</Text>;
};

export default Footer;
