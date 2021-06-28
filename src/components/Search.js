import './../css/Search.css'
import React, { Component } from 'react';
import SearchItem from './SearchItem';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

class Search extends Component {

  
    hide(){
        setTimeout(() => {
        document.getElementById("Categories").style.display="none"
        }, 1000);
    }


    state = { recipeList: "", data: [], isLoaded: false }
handleSearch() {
        console.log(this.state.recipeList)
       
         fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.state.recipeList}`)
            .then((result) => result.json())
            .then((result) => result)
           .then((result) => this.setState({ data: result, isLoaded: true }))
           .catch(error => {
            console.error("error: ", error);
        });
    } 

    render() {
        return (
            <>
            <Row>
                
            <Col className="search">
                <input className="searchInput input-radius"
                id ="searchinput"
                    type="text"
                    placeholder="Type something to search"
                    onChange={e => this.setState({ recipeList: " " + e.target.value })} />
                {console.log(this.state.data)}
                
               
                    <Link to="/">
                    <button type="button"
                    className="input-radius"
                    onClick={() => {this.handleSearch();this.hide()} }
                    >Search</button>
                </Link>
            </Col>
            </Row>
            <Row id="searchresult">
            
            
                      {
                     this.state.isLoaded ?
                        this.state.data.meals.map((Key, idMeal) => <SearchItem
                            data={Key}
                            key={Key.idMeal}
                        />)
                        : <div>Loading...</div>
                }
            
            </Row>
            </>
        );
    }
}

export default Search;








