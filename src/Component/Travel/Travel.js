import React, { useEffect, useState } from "react";
import { NewsArticle } from "../../Utils/Image";
import { API_KEY } from "../../API/API_key";
import "./Travel.css";
const Travel = () => {

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=travel&apiKey=${API_KEY}`)
      .then((response)=>{ return response.json()})
      .then((data)=>{setArticles(data.articles)})
  }, []);

  return (
    <section className="Articles">
      {articles.map((article) => (
        <article>
          <div className="Article">
            <img src={(article.urlToImage)?article.urlToImage:NewsArticle} className="image" alt="Article" />
            <div className="Article-body">
              <h5 className="title">{article.title}</h5>
              <h6 className="author">Author: {article.author}</h6>
              <p className="description">{article.description}</p>
              <a href={article.url} className="button">
                Read more
              </a>
            </div>
            <div className="Published">
              Published At: {new Date(article.publishedAt).toLocaleString()}
            </div>
            <div className="Published-reaction">
            <label className="ui-bookmark">
              <input type="checkbox" />
              <div className="bookmark">
                <svg
                  viewBox="0 0 16 16"
                  className="bi bi-heart-fill"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </label>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Travel;
