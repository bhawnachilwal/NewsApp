import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsItem from './NewsItem';

export default function News({ country, category }) {
  const [newsData, setNewsData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const pageSize = 10; // Replace with the actual page size from the API response
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=0dcf9e735f07495d96c39dacf059d0a5&page=${page}&pageSize=${pageSize}&category=${category}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.articles && Array.isArray(data.articles) && data.articles.length > 0) {
          const articles = data.articles.map(article => ({
            title: article.title,
            description: article.description,
            url: article.url,
            imageUrl: article.urlToImage,
          }));
          setNewsData(articles);
          setTotalPages(Math.ceil(data.totalResults / pageSize));
        } else {
          console.warn('No articles found in the API response.');
          setNewsData([]); // Set newsData to an empty array if no articles found
        }
      } catch (error) {
        console.error('Error fetching news data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, country, category]);

  const handleNextPage = () => {
    const nextPage = page + 1;
    if (nextPage <= totalPages) {
      setPage(nextPage);
    } else {
      console.warn('Attempting to go beyond the last page.');
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      console.warn('Attempting to go back from the first page.');
    }
  };

  return (
    <>
      <h3 className="text-center mb-5 mt-5">Top Headlines of the Day</h3>
      <div className="row justify-content-center">
        {loading ? (
          <p>Loading...</p>
        ) : newsData.length === 0 ? (
          <p>No articles found.</p>
        ) : (
          newsData.map((article, index) => (
            <div key={index} className="col-md-3 mb-4 ms-5">
              <NewsItem
                title={article.title}
                description={article.description}
                imageUrl={article.imageUrl}
                newsUrl={article.url}
              />
            </div>
          ))
        )}
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button onClick={handlePreviousPage} className="btn btn-primary me-3" disabled={page === 1 || loading}>
          Previous
        </button>
        <button onClick={handleNextPage} className="btn btn-primary" disabled={page === totalPages || loading}>
          Next
        </button>
      </div>
    </>
  );
}
