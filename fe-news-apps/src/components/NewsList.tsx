import React, { FC } from "react";
import { List } from "antd";
import NewsListItem from "./NewsListItem";

interface NewsListProps {
  news: Array<any>;
  loading: boolean;
}

const NewsList: FC<NewsListProps> = ({ news, loading }) => {
  return (
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
      dataSource={news}
      renderItem={(newsItem) => (
        <NewsListItem key={newsItem} {...newsItem} loading={loading} />
      )}
    >
    </List>
  );
};

export default NewsList;