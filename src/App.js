import Header from "./components/Header";
// import Search from "./components/Search";
import Foods from "./components/Foods";
import "./App.css";
import React, { useState, useEffect } from "react";
import Shimmer from "./components/shimmerUI";

function App() {
  const [restourantData, setRestourantData] = useState([]);
  const [searchValue, setsearchValue] = useState("");
  const [filteredRestourants, setfilteredRestourants] = useState([]);


  
  const handleFilterClick = () => { 

    const newFilteredData = restourantData.filter(
      (item) => item.info.avgRating > 4.4
      );
      setRestourantData(newFilteredData);
    };
    
    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.145269550486525&lng=72.83064298331738&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
      // const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9921457&lng=72.846563&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTIN`);

      // https:/corsproxy.io/

      const json = await data.json();
      console.log(json);

      const {restaurants} = json?.data.cards[1].card.card.gridElements.infoWithStyle; //optional chaining.
      
      setRestourantData(restaurants);
      setfilteredRestourants(restaurants);
      
      //setRestourantData() is a setstate function which setting the state of state variable.
      
    }

  return (restourantData.length === 0) ? <Shimmer /> : (
    <div className="App">
      <div id="header_container">
        <Header />
        {/* <Search></Search> */}

        <div className="Search">
          <input type="email" id="search-box" value={searchValue} onChange={(e)=>{setsearchValue(e.target.value)}}></input>
          <button onClick={()=>{

            const filteredData =  restourantData.filter((res)=>{
              return res.info.name.toLowerCase().includes(searchValue.toLowerCase());
            })
            setfilteredRestourants(filteredData);
            
          }}>Search</button>

          <button className="filter" onClick={handleFilterClick}>
            Top rated - restaurants
          </button>
        </div>

        

        <div id="items">
          {filteredRestourants.map((restourant, index) => (
            <Foods key={index} RestData={restourant} /> 
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;