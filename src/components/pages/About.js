import UserClass from "../UserClass";
import User from "../User";

const About = () =>{
    return (
        <div>
            <h1>This is About page.</h1>
            <UserClass name={"Vipul Gupta class()"} contact={"vipulgupta611@gmail.com"}></UserClass>
            <User name={"Vipul Gupta function()"} contact={"vipulgupta611@gmail.com"} ></User> 
        </div>
    )
}

export default About;