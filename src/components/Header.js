import { Link } from "react-router-dom";
import myimage from "../logo.jpg";
import { useState,useEffect } from "react";

const Header = () => {

  const [new_User, setnewUser] = useState("login");
  
  useEffect(()=>{
    
  },[])

  return (
    <div id="Header">
      <div className="logo">
        <img src={myimage} alt="logo"></img>
      </div>
      <div className="banner">
        <h2>Shine Restaurant</h2>
      </div>
      <div className="nav_items">
        <h2><Link to="/">Home</Link></h2> 
        <h2><Link to="/contact">Contact</Link></h2>
        <h2><Link to="/about">About US</Link></h2>
        <h2>Cart</h2>

        <button className="login" onClick={()=>{
          (new_User === "login") ? setnewUser("logout") : setnewUser("login");
        }} >{new_User}</button>
      </div>
    </div>
  );
};

export default Header;
