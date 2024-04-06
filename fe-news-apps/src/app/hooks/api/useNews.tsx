import React from "react";
import { API_BASE_URL, API_KEY } from "../../config/api-key";
import { IArticles, IResNews } from "../../interface/news.interface";

const useNews = () => {
  const [news, setNews] = React.useState<IResNews>({
    data: [],
    pending: false,
    isEmpty: false,
  });

  const getArticles = React.useCallback(async () => {
    setNews({ ...news, pending: true });
    try {
      const response = await fetch(
        `${API_BASE_URL}/top-headlines?sources=techcrunch&apiKey=${API_KEY}`
      );

      const data = await response.json();
      const articles = data?.articles;
      if(articles === undefined){
        setNews({...news, isEmpty: true})
      }else{
        setNews({ ...news, data: articles as IArticles[], pending: false });
      }
    } catch (error) {
      throw new Error("Error fetching news: " + error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    news,
    getArticles,
  };
};

export default useNews;
