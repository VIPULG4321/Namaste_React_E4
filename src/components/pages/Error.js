import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>Error!!!</h1>
            <h1>Page not found!!</h1>
            <h2>{err.data}</h2>
            <h2>{err.status} : {err.statusText}</h2>
        </div>
    )
}
export default Error; 


