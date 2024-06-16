import UserClass from "../UserClass";
import React from "react";

class About extends React.Component{
    constructor(){
        super()

        // console.log("Parent Constructor"); 
    }

    componentDidMount(){
        // console.log("Parent ComponentDidMount"); 
    }
    
    render(){
    // console.log("Parent render");
        return (
            <div>
            <h1>This is About page.</h1>
            <UserClass name={"First class()"} contact={"vipulgupta611@gmail.com"}></UserClass>
        </div>
        )
    }
}

export default About;