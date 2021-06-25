import './../css/Recipe.css'
import '../css/Loader.css'


import React, { Component } from 'react';
import { Row } from 'reactstrap';


class Recipe extends Component {
    state = {
        data: [],
        isLoaded: false
    }
    componentDidMount() {
        let id = this.props.match.params.Id
        console.log(id)
        fetch(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((result) => result.json())
            .then((result) => result)
            .then((result) => this.setState({ data: result, isLoaded: true }))
        
    }
    render() {
        return (
            <Row lg="1" className="Categories">
               {console.log(this.state.data.meals)}
                {
                    this.state.isLoaded ? 
                    <div className="categoriesItem">
                    <img src={this.state.data.meals[0].strMealThumb} alt="name"></img><br/>
                    <h1>{this.state.data.meals[0].strMeal}</h1><br/>
                    <p>{this.state.data.meals[0].strInstructions}</p><br/>
                    <h2>Ingredients</h2>
                    <p>{this.state.data.meals[0].strIngredient1}</p>
                    <p>{this.state.data.meals[0].strIngredient2}</p>
                    <p>{this.state.data.meals[0].strIngredient3}</p>
                    <p>{this.state.data.meals[0].strIngredient4}</p>
                    <p>{this.state.data.meals[0].strIngredient5}</p>
                    <p>{this.state.data.meals[0].strIngredient6}</p>
                    <p>{this.state.data.meals[0].strIngredient7}</p>
                    <p>{this.state.data.meals[0].strIngredient8}</p>
                    <p>{this.state.data.meals[0].strIngredient9}</p>
                    <p>{this.state.data.meals[0].strIngredient10}</p>
                    <p>{this.state.data.meals[0].strIngredient11}</p>
                    <p>{this.state.data.meals[0].strIngredient12}</p>
                    <p>{this.state.data.meals[0].strIngredient13}</p>
                    <p>{this.state.data.meals[0].strIngredient14}</p>
                    <p>{this.state.data.meals[0].strIngredient15}</p>
                    <p>{this.state.data.meals[0].strIngredient16}</p>
                    <p>{this.state.data.meals[0].strIngredient17}</p>
                    <p>{this.state.data.meals[0].strIngredient18}</p>
                    <p>{this.state.data.meals[0].strIngredient19}</p>
                    <p>{this.state.data.meals[0].strIngredient20}</p>    
                   <div className="btn"><a href={this.state.data.meals[0].strYoutube}>WATCH ON YOUTUBE</a></div>
                    </div>
                        :
                        <div>
                            <div className="vs"><div class="lds-grid">Loading...<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
                        </div>
                }
            </Row>
        );
    }
}

export default Recipe;
