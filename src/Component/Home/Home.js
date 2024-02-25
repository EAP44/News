import axios from "axios";
import React, { useEffect, useState } from "react";
import { NewsArticle } from "../../Utils/Image";
import { API_KEY } from "../../API/API_key";
import "./Home.css";
import { useSelector } from "react-redux";
const Home = () => {

  const [articles, setArticles] = useState([]);
  const [countrysign, setcountrysign] = useState();
  const country = useSelector(data=>data.country)
  switch(country){
      case 'United States of America':
          return setcountrysign('us')
      case 'Morocco':
          return setcountrysign('ma')
      case 'Japan':
          return setcountrysign('jp')
      case 'France':
          return setcountrysign('fr')
      case 'Denmark':
          return setcountrysign('da')
      case 'Canada':
          return setcountrysign('ca')
  }
  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
    .then(response=>setArticles(response.data.articles))
    .catch(error=>console.error("Error fetching articles:",error))
  }, []);

  return (
    <div>
     <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    {articles.map((article) => {
            return(
                <div class="carousel-item active" data-bs-interval="1000">
                    <img src={(article.urlToImage)?article.urlToImage:NewsArticle} class="d-block w-100" height={730} alt={article.title}/>
                    <div class="carousel-caption d-none d-md-block">
                      <h1 className="text-light">{article.title}</h1>
                      <h4 className="text-light">{article.description}</h4>
                    </div>
                </div>
            )
          })}
    </div>
  </div>
</div>
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
    </div>
  );
};

export default Home;
