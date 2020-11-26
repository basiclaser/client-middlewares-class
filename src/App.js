import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    console.log("this is the new data", data);
  }, [data]);

  useEffect(() => {
    fetch("http://localhost:4000")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <ul>
      {data.hits.map((item) => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default App;
