import React from "react";
import { useParams } from "react-router-dom";
import useNews from "../../../../hooks/api/useNews";
import { Button, Flex, Image, Skeleton, Typography } from "antd";
import NewsBreadCrumb from "../../_components/news-breadcrumb";

const NewsDetail: React.FC = () => {
  const params = useParams();
  const { news, getArticles } = useNews();
  const { Text } = Typography;

  React.useEffect(() => {
    getArticles();
  }, [getArticles]);

  const detailArticle = news.data?.find(
    (article) => article.title === params?.id
  );

  if (news.pending) {
    return (
      <Flex
        vertical
        style={{
          width: "100%",
          height: "100vh",
          alignItems: "center",
       
        }}
        gap="20px"
      >
        <Flex
          vertical
          gap="10px"
          style={{ width: "650px", alignItems: "center" }}
        >
          <Skeleton active />
          <Skeleton active />
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex
      vertical
      style={{ width: "100%", height: "100vh", alignItems: "center" }}
      gap="20px"
    >
      <Flex
        vertical
        gap="10px"
        style={{ width: "650px", alignItems: "center" }}
      >
        <Text
          style={{
            fontSize: "27px",
            fontWeight: "600",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          {detailArticle?.title}
        </Text>
        <NewsBreadCrumb
          activePage={<Text>{detailArticle?.source.name}</Text>}
        />
        <Image
          src={detailArticle?.urlToImage}
          width="650px"
          style={{ borderRadius: "20px" }}
        />

        <Text
          style={{ fontSize: "16px", padding: "10px 0", textIndent: "20px" }}
        >
          {detailArticle?.content}
        </Text>
        <Button onClick={() => window.open(detailArticle?.url, "_blank")}>
          Read more on {detailArticle?.source?.name}
        </Button>
      </Flex>
    </Flex>
  );
};

export default NewsDetail;
