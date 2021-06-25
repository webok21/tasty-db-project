import './../css/Search.css'

const Search = () => {
    return (
        <div className="search">
            <input className="searchInput input-radius" type="text" placeholder="Type something to search" />
            <button className="input-radius">Search</button>

        </div>
    );
}

export default Search;