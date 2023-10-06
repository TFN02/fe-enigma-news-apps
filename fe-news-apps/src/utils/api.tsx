const API_KEY = '440b51917ca94315ac751a4aa6ee25ed';
const API_BASE_URL = 'https://newsapi.org/v2';

export const getNews = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/everything?q=apple&from=2023-10-04&to=2023-10-04&sortBy=popularity&apiKey=${API_KEY}`);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    throw new Error('Error fetching news: ' + error);
  }
};

