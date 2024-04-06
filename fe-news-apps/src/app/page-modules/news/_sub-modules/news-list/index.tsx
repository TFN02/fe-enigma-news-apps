import React from "react";
import { List } from "antd";
import { IArticles } from "../../../../interface/news.interface";
import NewsItem from "../../_components/news-item";

interface NewsListProps {
  articles: IArticles[];
  loading: boolean;
}

const NewsList: React.FC<NewsListProps> = ({ articles, loading }) => {
  return (
    <>
      <List
        loading={loading}
        style={{ overflowX: "hidden" }}
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 2,
          showSizeChanger: false,
          align: "center",
        }}
        dataSource={articles}
        renderItem={(article) => (
          <NewsItem key={article.title} article={article} />
        )}
      />
    </>
  );
};

export default NewsList;
