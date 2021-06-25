import './../css/Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="./img/tasty-logo.png" alt="logo" />
            </div>
            <h1>Find a recipe, an idea, an inspiration...</h1>
        </div>
    );
}

export default Header;