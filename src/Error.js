import { Link } from "react-router-dom";
const Error = () => {
    return ( 
        <div className="error">
            <h2>Oops!</h2>
            <p>Some Thing Went Wrong</p>
            <Link to='/'>Go to Home page.</Link>

        </div>
     );
}
 
export default Error;