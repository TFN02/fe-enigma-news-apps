import React from "react";
import { Card, Divider, Row, Tag } from "antd";
import { Typography } from "antd";
import { IArticles } from "../../../../interface/news.interface";
import { formatDate } from "../../../../helper/format-date.helper";

interface NewsHighlightProps {
  articles: IArticles[];
  loading: boolean;
}
const NewsHighlight: React.FC<NewsHighlightProps> = ({ articles, loading }) => {
  const { Title, Paragraph } = Typography;
  const openLink = (): void => {
    window.open(articles.length > 0 ? articles[0].url : undefined);
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
            src={articles.length > 0 ? articles[0].urlToImage : undefined}
          />
        }
        styles={{ body: { padding: "1rem 0 0 0" } }}
      >
        <Title level={2}>
          <span
            onClick={openLink}
            role="link"
            style={{ fontWeight: 700, cursor: "pointer" }}
          >
            {articles.length > 0 ? articles[0].title : "Tidak ada Berita"}
          </span>
        </Title>

        <Paragraph ellipsis={{ rows: 3 }} style={{ textAlign: "justify" }}>
          {articles.length > 0 ? articles[0].description : "..."}
        </Paragraph>
        <Row justify="end">
          <Divider orientation="right">
            <Tag color="default">
              Author: {articles.length > 0 ? articles[0].author : "..."}
            </Tag>
            <Tag color="default">
              Published:{" "}
              {articles.length > 0
                ? formatDate(articles[0].publishedAt as string)
                : "..."}
            </Tag>
          </Divider>
        </Row>
      </Card>
    </section>
  );
};

export default NewsHighlight;
