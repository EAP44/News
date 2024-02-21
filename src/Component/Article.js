import React from 'react';

const Article = ({ article }) => {

  // const [articles, setArticles] = useState([]);
  // useEffect(() => {
  //   axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
  //   .then(response=>setArticles(response.data.articles))
  //   .catch(error=>console.error("Error fetching articles:",error))
  // }, []);

      // <div>
    //   {articles.map((article, index) => (
    //     <Article key={index} article={article} />
    //   ))}
    // </div>


  const { author, title, description, url, urlToImage, publishedAt, content } = article;

  return (
    <div className="container mt-5">
      <div className="card">
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
