import './../css/Search.css'
import React, { Component } from 'react';
import SearchItem from './SearchItem';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

class Search extends Component {


    hide() {
        setTimeout(() => {
            document.getElementById("Categories").style.display = "none"
        }, 800);
    }

    hide2(){
        document.getElementById("searchresult").style.display = "none"
    }
    show(){
        document.getElementById("searchresult").style.display = "flex"
    }



    state = { recipeList: "", data: [], isLoaded: false, mergedData: [] }

componentWillUnmount(){
    this.setState({ data:"", isLoaded:false  });
}
    componentDidMount(){
        this.hide2()
            setTimeout(() => {
                fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.state.recipeList}`)
                        .then((result) => result.json())
                        .then((result) => result)
                        .then((result) => this.setState({ data: result, isLoaded: true }))
                        .catch(error => {
                            console.error("error: ", error);
                        });
            }, 200);        
               
    }
 
  

    render() {
        return (
            <div>
                <Row>

                    <Col className="search">
                        <input className="searchInput input-radius"
                            id="searchinput"
                            type="text"
                            placeholder="Start typing to search"
                            onChange={e => this.setState({ recipeList: e.target.value })}
                            onInput={() => { this.componentDidMount(); this.show() }}
                        />
    


                        <Link to="/random">
                            <button type="button"
                                id="searchbutton"
                                className="input-radius"
                                onClick={() => { this.componentDidMount(); this.hide2() }}
                            >Get a random recipe</button>
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
            </div>
        );
    }
}

export default Search;








