import React from "react";
import useFetchNews from "../../hook/useFetch";
import Card from "../card/Card";
import "./Main.css"

const Main = () => {
  const { news, loading, error } = useFetchNews();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="news-list">
      {news.map((article) => (
        <Card key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Main;
