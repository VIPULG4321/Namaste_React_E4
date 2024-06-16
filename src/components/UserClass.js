import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            github_data : {
                name : "dummy",
                id : "11111"
            }
        }

    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/VIPULG4321");
        const json = await data.json();

        console.log(json);

        this.setState({
            github_data : json
        })
    }

    render(){
        const {name,id} = this.state.github_data;
        // console.log( name + " render");
        return (
            <div className="user-card">
                <h2>Name : {name}</h2>
                <h3>User_id : {id}</h3> 
            </div>
        )
    }
}
export default UserClass;