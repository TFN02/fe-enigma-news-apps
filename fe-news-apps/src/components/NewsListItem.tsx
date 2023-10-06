import React, { FC } from "react";
import { Col, Divider, Row, Tag, Typography } from "antd";

const { Title, Paragraph } = Typography;

interface NewsListItemProps {
  title: string;
  description: string;
  urlToImage: string;
  author: string;
  publishedAt: string;
  url: string;
}

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const NewsListItem: FC<NewsListItemProps> = ({
  title,
  description,
  urlToImage,
  author,
  publishedAt,
  url,
}) => {
  const openLink = (): void => {
    window.open(url);
  };

  return (
    <Row justify="space-between">
      <Col sm={24} md={12}>
        <Title level={3} style={{ margin: "1rem 0" }}>
          <span
            onClick={openLink}
            role="link"
            style={{ color: "blue", cursor: "pointer" }}
          >
            {title}
          </span>
        </Title>
        <Paragraph ellipsis={{ rows: 2 }} style={{ textAlign: "justify" }}>
          {description}
        </Paragraph>
      </Col>
      <Col span={12} style={{ textAlign: "center", margin: "1rem 0" }}>
        <img
          style={{ width: "70%", borderRadius: "5%" }}
          src={urlToImage}
          alt="thumbnail"
        />
      </Col>

      <Divider orientation="right">
        <Tag color="default">Author: {author}</Tag>
        <Tag color="default">Published: {formatDate(publishedAt)}</Tag>
      </Divider>
    </Row>
  );
};

export default NewsListItem;