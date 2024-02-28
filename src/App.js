import Header from "./components/Header";
import Search from "./components/Search";
import Foods from "./components/Foods";
import "./App.css";
import React, { useState, useEffect } from "react";
import initialRestourantData from "./utils/restourant";

function App() {
  const [restourantData, setRestourantData] = useState(initialRestourantData);
  
  const handleFilterClick = () => {
    const newFilteredData = initialRestourantData.filter(
      (item) => item.info.avgRating > 4
      );
      setRestourantData(newFilteredData);
    };
    
    const handle_Back = () => {
      const filteredData = initialRestourantData.map((item) => item);
      setRestourantData(filteredData);
    };
    
    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      const json = await data.json();
      console.log(json); 

    }

  return (
    <div className="App">
      <div id="header_container">
        <Header />
        <Search></Search>
        <button className="filter" onClick={handleFilterClick}>
          Top rated - restaurants
        </button>

        <button className="back" onClick={handle_Back}>
          Back
        </button>
        <div id="items">
          {restourantData.map((restourant, index) => (
            <Foods key={index} RestData={restourant} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;