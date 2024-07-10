import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const NewsCard = ({ article }) => {
  const imageUrl =
    article.media && article.media.length > 0
      ? article.media[0]["media-metadata"][2].url
      : null;

  return (
    <div className="news-card">
      <div className="cardBox">
        {imageUrl && (
          <img src={imageUrl} alt={article.title} className="news-image" />
        )}
        <h2>{article.title}</h2>
        <p>{article.abstract}</p>
        <div className="link">

           <Link to={`/news/${article.id}`}>Read more</Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
