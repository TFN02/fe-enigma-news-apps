import React, { useState, FC } from "react";
import { Card, Divider, Row, Tag } from "antd";
import { Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

interface NewsItemProps {
  news: {
    urlToImage: string;
    title: string;
    description: string;
    author: string;
    publishedAt: string;
    url: string;
  }[];
  loading: boolean;
}


const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const NewsItem: FC<NewsItemProps> = ({ news, loading }) => {
  const openLink = (): void => {
    window.open(news.length > 0 ? news[0].url : undefined);
  };
  return (
    <section className="news-item">
      <Card
        loading={loading}
        style={{ width: "90%", boxShadow: "none" }}
        bordered={false}
        cover={
          <img
            style={{ borderRadius: "5%" }}
            alt="thumbnail"
            src={news.length > 0 ? news[0].urlToImage : undefined}
          />
        }
        bodyStyle={{ padding: "1rem 0 0 0" }}
      >
        <Title level={2}>
          <span
            onClick={openLink}
            role="link"
            style={{ color: "blue", cursor: "pointer" }}
          >
            {news.length > 0 ? news[0].title : "Tidak ada Berita"}
          </span>
        </Title>

        <Paragraph ellipsis={{ rows: 3 }} style={{ textAlign: "justify" }}>
          {news.length > 0 ? news[0].description : "..."}
        </Paragraph>
        <Row justify="end">
          <Divider orientation="right">
            <Tag color="default">
              Author: {news.length > 0 ? news[0].author : "..."}
            </Tag>
            <Tag color="default">
              Published: {news.length > 0 ? formatDate(news[0].publishedAt) : "..."}
            </Tag>
          </Divider>
        </Row>
      </Card>
    </section>
  );
};

export default NewsItem;
