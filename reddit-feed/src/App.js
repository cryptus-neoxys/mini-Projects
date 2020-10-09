import React, { useState, useEffect } from "react";
import Article from './components/Article';
import './App.css';

function App() {
  const [reddit, setReddit] = useState("webdev");
  const [articles, setArticles] = useState([]);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    fetch(`https://www.reddit.com/r/${reddit}.json?limit=${limit}`).then(
      (res) => {
        if (res.status !== 200) {
          console.warn("Warning: Something is wrong with the api.");
          return;
        }
        res.json().then((data) => {
          if (data != null) {
            // console.log([1, 2])
            setArticles(data.data.children);
          }
        });
      }
    ).catch(err => console.warn(err));
  }, [reddit, limit]);

  return (
    <div className='App'>
      <header>
        <div className="name">
          <input
            type='text'
            className='inputbox'
            value={reddit}
            onChange={(e) => setReddit(e.target.value)}
          />
        </div>
        <div className="range">
          <input
            type='range'
            id='rangeInput'
            name='rangeInput'
            min='1'
            max='30'
            value={limit}
            step='1'
            onChange={(e) => setLimit(Number(e.target.value))}
          />
          <output id="amount" name="amount" htmlFor="rangeInput">{limit + 2}</output>
        </div>
      </header>
      <div className='articles'>
        {articles != null ? articles.map((article, i) => (
          <Article key={i} title={article.data.title} permalink={article.data.permalink} />
        )) : null}
      </div>
    </div>
  );
}

export default App;
