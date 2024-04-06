import React from "react";
import { Col, Divider, Row, Tag, Typography } from "antd";
import { formatDate } from "../../../../helper/format-date.helper";
import { IArticles } from "../../../../interface/news.interface";
import { useNavigate } from "react-router-dom";
import { NAVIGATION } from "../../../../config/navigation";

interface NewsItemProps {
  article: IArticles;
}

const NewsItem: React.FC<NewsItemProps> = ({ article }) => {
  const { Title, Paragraph } = Typography;
  const navigate = useNavigate();

  const toDetail = (id: string) => {
      navigate(`${NAVIGATION.NEWS_DETAIL}/${id}`)
  };

  return (
    <Row justify="space-between">
      <Col sm={24} md={12}>
        <Title level={3} style={{ margin: "1rem 0" }}>
          <span
            onClick={() => toDetail(article.title)}
            role="link"
            style={{ fontWeight: "700", cursor: "pointer" }}
          >
            {article.title}
          </span>
        </Title>
        <Paragraph ellipsis={{ rows: 2 }} style={{ textAlign: "justify" }}>
          {article.description}
        </Paragraph>
      </Col>
      <Col span={12} style={{ textAlign: "center", margin: "1rem 0" }}>
        <img
          style={{ width: "70%", borderRadius: "5%" }}
          src={article.urlToImage}
          alt="thumbnail"
        />
      </Col>

      <Divider orientation="right">
        <Tag color="default">Author: {article.author}</Tag>
        <Tag color="default">
          Published: {formatDate(article.publishedAt as string)}
        </Tag>
      </Divider>
    </Row>
  );
};

export default NewsItem;
