import logo from './resources/doge-logo.jpg';
import {Link} from 'react-router-dom';

const Navbar = () =>{
    return(
        <div className="navbar">
            <img src={logo} alt="logo" />
            <h1>DogeBlog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </div>
    );
}

export default Navbar;