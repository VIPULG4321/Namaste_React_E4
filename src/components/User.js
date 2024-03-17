import { useState } from "react";

const User = (props) => {
    console.log(props);
    const {name,contact} = props;
    const [count] = useState(0);

    return (
        <div className="user-card">
            <h1>Count : {count}</h1>
            <h2>Name : {name}</h2>
            <h3>Skills : HTML&CSS , JavaScript, React, Tailwind</h3>
            <h3>Contact : {contact}</h3> 
        </div>
    )
}
export default User;