import React from "react";
import { useParams } from "react-router-dom";
import useFetchNews from "../../hook/useFetch";
import "./Singlepage.css";

const Singlepage = () => {
  const { id } = useParams();
  const { news, loading, error } = useFetchNews();
  const article = news.find((news) => news.id.toString() === id);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  if (!article) {
    return <div className="not-found">Article not found</div>;
  }

  return (
    <div className="singlepage">
      <h1>{article.title}</h1>
      <p>{article.abstract}</p>
      {article.media && article.media.length > 0 && (
        <img
          src={article.media[0]["media-metadata"][2].url}
          alt={article.title}
          className="article-image"
        />
      )}
      <p>
        <strong>By:</strong> {article.byline}
      </p>
      <p>
        <strong>Published on:</strong>{" "}
        {new Date(article.published_date).toLocaleDateString()}
      </p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="full-article"
      >
        Read full article
      </a>
    </div>
  );
};

export default Singlepage;
