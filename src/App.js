import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const data = 
  [
  
      { date: "2022-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-02", views: 150, article: "Article 2" },
  
      { date: "2023-09-02", views: 120, article: "Article 3" },
  
      { date: "2020-09-03", views: 200, article: "Article 4" }
  
  ]
  const [details, setDetails] = useState(data);
  
  let datacopy = data;
  const dataHandler = (sortKey) => {

    datacopy = [...data].sort((a, b) => {
      if (typeof a[sortKey] === "number") {
        return b[sortKey] - a[sortKey];
      } else if (typeof a[sortKey] === "string") {
        return b[sortKey].localeCompare(a[sortKey]);
      }
      return 0;
    });
  
  
    setDetails(datacopy)
    console.log(datacopy);
  };
  useEffect(()=>{

  },[details])
  return (
    <div>
      <h1>Date and Table Views</h1>
      <button onClick={()=>{dataHandler("date")}}>Sort by Date</button>
      <button onClick={()=>{dataHandler("views")}}>Sort by Views</button>
    <table style={{textAlign: 'left'}}>
        <thead>
          <tr>
            <th>date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.sort((a,b)=> a.sortType - b.sortType) } */}
          {details.map((item)=> 

         <tr>
            <td>{item.date}</td>
            <td>{item.views}</td>
            <td>{item.article}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
