import axios from "axios";
import React, { useEffect, useState } from "react";
import { NewsArticle } from "../../Utils/Image";
import { API_KEY } from "../../API/API_key";
import "./Home.css";
const Home = () => {

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
    .then(response=>setArticles(response.data.articles))
    .catch(error=>console.error("Error fetching articles:",error))
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
          </div>
        </article>
      ))}
    </section>
  );
};

export default Home;