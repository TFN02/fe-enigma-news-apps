import React from "react";
import { Col, Row } from "antd";

import NewsList from "../news-list";
import NewsHighlight from "../news-highlight";
import useNews from "../../../../hooks/api/useNews";
import { IArticles } from "../../../../interface/news.interface";
import NewsEmpty from "../news-empty";


const NewsMain: React.FC = () => {
  const { getArticles, news } = useNews();

  React.useEffect(() => {
    getArticles();
  }, [getArticles]);

  if(news.isEmpty){
    return <NewsEmpty />
  }

  return (
    <Row>
      <Col xs={24} md={12}>
        <NewsHighlight articles={news.data as IArticles[]} loading={news.pending} />
      </Col>
      <Col xs={24} md={12}>
        <NewsList articles={news.data as IArticles[]} loading={news.pending} />
      </Col>
    </Row>
  );
};

export default NewsMain;
