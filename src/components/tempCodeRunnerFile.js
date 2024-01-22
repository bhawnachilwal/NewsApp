import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

const apiKey = 'dcf9e735f07495d96c39dacf059d0a5'; // Replace with your actual News API key

const categorizeNews = (title, description) => {
  // ... (unchanged)
};

const News = ({ category }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us${
            category ? `&category=${category}` : ''
          }&apiKey=${apiKey}`
        );
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news data:', error.message);
        setNews([]);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="container">
      <div className="row">
        {news.map((article) => (
          <div key={article.url} className="col-md-4">
            <NewsItem
              title={article.title}
              description={article.description}
              image={article.urlToImage}
              category={categorizeNews(article.title, article.description)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
