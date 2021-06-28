import './../css/Header.css'
import { Link } from 'react-router-dom';
import Search from "./Search";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/"><img src="/img/tasty-logo.png" alt="logo" /></Link>
            </div>
            <h1>Find a recipe, an idea, an inspiration...</h1>
           
        </div>

    );
}

export default Header;