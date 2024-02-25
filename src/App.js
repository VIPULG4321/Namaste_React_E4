import Header from "./components/Header";
import Search from './components/Search';
import Foods from './components/Foods';
import './App.css';
import React, { useState } from 'react';
import initialRestourantData from "./utils/restourant";

function App() {
  
  const [restourantData, setRestourantData] = useState(initialRestourantData); 
  
  const handleFilterClick = () => {
    const newFilteredData = initialRestourantData.filter((item) => item.info.avgRating > 4);
    setRestourantData(newFilteredData);
  };

  const handle_Back = () => {
    const filteredData = initialRestourantData.map((item)=> item);
    setRestourantData(filteredData);
  }

  return (
    <div className="App">
      <div id="header_container">
        <Header />
        <Search></Search>
        <button
        className="filter"
        onClick={handleFilterClick}
        >
        Top rated - restaurants
        </button>
        <button onClick={handle_Back}>Back</button>
        <div id='items'>
          {
            restourantData.map((restourant, index)=>(
              <Foods key={index} RestData={restourant}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;