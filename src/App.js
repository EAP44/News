import React, { useEffect, useState } from "react";
import Article from "./Article";
import axios from "axios";

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url ='https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2065497c5d6f4589b3d3d2dad4050f62';
    axios
      .get(url)
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  return (
    <div>
      {articles.map((article, index) => (
        <Article key={index} article={article} />
      ))}
    </div>
  );
};

export default App;

