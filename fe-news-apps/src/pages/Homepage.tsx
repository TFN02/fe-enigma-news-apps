import React, { useState, useEffect } from "react";
import NewsList from "../components/NewsList";
import NewsItem from "../components/NewsItem";
import { Col, Row } from "antd";
import { getNews } from "../utils/api";

const Homepage: React.FC = () => {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  console.log(news);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await getNews();
        setNews(newsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <Row>
      <Col xs={24} md={12}>
        <NewsItem news={news} loading={loading} />
      </Col>
      <Col xs={24} md={12}>
        <NewsList news={news} loading={loading} />
      </Col>
    </Row>
  );
};

export default Homepage;