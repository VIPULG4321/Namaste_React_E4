// import Header from "./components/Header";
// import Search from "./components/Search";
import Foods from "./components/Foods";
import Shimmer from "./components/shimmerUI";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function App() {
  const [restourantData, setRestourantData] = useState([]);
  const [searchValue, setsearchValue] = useState("");
  const [filteredRestourants, setfilteredRestourants] = useState([]);

  const Searchh = () => {
    return (
      <div className="Search">
          <input type="text" id="search-box" value={searchValue} onChange={(e)=>{setsearchValue(e.target.value)}}></input>
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
    )
    
  }
  const AllFoods = () => {
    console.log(filteredRestourants);
    return (
      <div id="items">
        
          {filteredRestourants.map((restourant) => (
            <Link className="link" key={restourant.info.id} to={"/restourants/" + restourant.info.id}><Foods RestData={restourant} /></Link>
          ))}
        </div>
    )
  }

  // <Link key={restourant.info.id} to={"/restourants/" + restourant.info.id}></Link>

  const handleFilterClick = () => { 

    const newFilteredData = restourantData.filter(
      (item) => item.info.avgRating > 4.5
      );
      setfilteredRestourants(newFilteredData);
    };
    
    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.145269550486525&lng=72.83064298331738&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);

      // https:/corsproxy.io/
      const json = await data.json();
      // console.log(json); 

      const {restaurants} = json?.data.cards[1].card.card.gridElements.infoWithStyle; //optional chaining.
      
      setRestourantData(restaurants);
      setfilteredRestourants(restaurants);
      //setRestourantData() is a setstate function which setting the state of state variable.
    }

    

  return (restourantData.length === 0) ? <Shimmer /> : (
    <div className="App">
      <div id="header_container">
        <Searchh></Searchh>
        <AllFoods></AllFoods>
      </div>
    </div>
  );
}

export default App;