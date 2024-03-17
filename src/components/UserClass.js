import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
    }
    render(){
        const {name,contact} = this.props;
        return (
            <div className="user-card">
                <h2>Name : {name}</h2>
                <h3>Skills : HTML&CSS , JavaScript, React, Tailwind</h3>
                <h3>Contact : {contact}</h3> 
            </div>
        )
    }
}
export default UserClass;