import './../css/Search.css'
import React, { Component } from 'react';

import SearchItem from '../components/SearchItem';
import { Link } from 'react-router-dom';


class Search extends Component {

    state = { recipeList: "", data: [], isLoaded: false }
    
    handleSearch() {
        console.log(this.state.recipeList)
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.state.recipeList}`)
            .then((result) => result.json())
            .then((result) => result)
            .then((result) => this.setState({ data: result, isLoaded: true }))
    }

    
    render() {
        return (
            
            <div className="search">

                <input className="searchInput input-radius"
                    type="text"
                    placeholder="Type something to search"
                    onChange={e => this.setState({ recipeList: " " + e.target.value })} />
                {console.log(this.state.data)}

                <Link to="/search">
                    <button type="button"
                    className="input-radius"
                    onClick={() => this.handleSearch()}>Search</button>
                </Link>
                    {
                    this.state.isLoaded ?
                        this.state.data.meals.map((Key, idMeal) => <SearchItem
                            data={Key}
                            key={Key.idMeal}
                        />)
                        : <div></div>
                }

                </div>
        
        );
    }
}

export default Search;








