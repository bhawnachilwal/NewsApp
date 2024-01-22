import React from 'react';
import News from './News';

export default function NewsItem({ title, description, imageUrl, newsUrl }) {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        {imageUrl && (
          <img
            src={imageUrl}
            className="card-img-top"
            alt={title}
            style={{ height: '200px', objectFit: 'cover' }}
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
