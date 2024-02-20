import React, { useEffect, useState } from 'react';
import Article from './Article';
import axios from 'axios';

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        sources: 'bbc-news,the-verge',
        q: 'bitcoin',
        category: 'business',
        language: 'en',
        country: 'us',
        apiKey: '2065497c5d6f4589b3d3d2dad4050f62'
      }
    })
    .then(response => {
      setArticles(response.data.articles);
      console.log(response.data.articles); // Log the articles, not the state variable
    })
    .catch(error => {
      console.error('Error fetching articles??????????????????:', error);
    });
  }, []);
  

  return (
    <div>
      {/* <Article article={articles}/> */}
    </div>
  );
}

export default App;

