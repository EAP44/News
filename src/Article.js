import React from 'react';

const Article = ({ article }) => {
  const { source, author, title, description, url, urlToImage, publishedAt, content } = article;

  return (
    <div className="container mt-5">
      <div className="card">
        {source.id}
        <img src={urlToImage} className="card-img-top" alt="Article" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Author: {author}</h6>
          <p className="card-text">{description}</p>
          <a href={url} className="btn btn-primary">Read more</a>
        </div>
        <div className="card-footer text-muted">
          Published At: {new Date(publishedAt).toLocaleString()}
        </div>
        <div className="card-footer text-muted">
          &{content}
        </div>
      </div>
    </div>
  );
}

export default Article;
