import { useState, useEffect } from 'react';

const useFetch = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading (true)
        const response = await fetch('https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=GlciAr0yWwjoCrXGIesVbGUkAPROEzVf');
        const data = await response.json();
        setNews(data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return { news, loading, error };
};

export default useFetch;