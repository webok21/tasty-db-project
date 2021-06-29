import './../css/Recipe.css'
import '../css/Loader.css'


import React, { Component } from 'react';
import { Row } from 'reactstrap';
import YouTubeModal from "./YouTubeModal"


class Random extends Component {
    state = {
        data: [],
        isLoaded: false,
        linkYoutube: []
    }
    componentDidMount() {
        fetch(`http://www.themealdb.com/api/json/v1/1/random.php`)
            .then((result) => result.json())
            .then((result) => result)
            .then((result) => this.setState({ data: result, isLoaded: true, linkYoutube: result.meals[0].strYoutube }))
    }
    render() {
        return (
            <Row id="random"lg="1" className="recipe-container div-radius">
                {console.log(this.state.data.meals)}
                {
                    this.state.isLoaded ?
                        <div>
                            <figure>
                                <img src={this.state.data.meals[0].strMealThumb} alt="meal"></img>
                            </figure>

                            <article className="recipe">
                                <section className="recipe-instructions">
                                    <h2>{this.state.data.meals[0].strMeal}</h2>
                                    <p>{this.state.data.meals[0].strInstructions}</p>
                                </section>

                                <section className="recipe-ingredients">
                                    <h2>Ingredients</h2>
                                    <ul>
                                        <li>{this.state.data.meals[0].strMeasure1} {this.state.data.meals[0].strIngredient1}</li>
                                        <li>{this.state.data.meals[0].strMeasure2} {this.state.data.meals[0].strIngredient2}</li>
                                        <li>{this.state.data.meals[0].strMeasure3} {this.state.data.meals[0].strIngredient3}</li>
                                        <li>{this.state.data.meals[0].strMeasure4} {this.state.data.meals[0].strIngredient4}</li>
                                        <li>{this.state.data.meals[0].strMeasure5} {this.state.data.meals[0].strIngredient5}</li>
                                        <li>{this.state.data.meals[0].strMeasure6} {this.state.data.meals[0].strIngredient6}</li>
                                        <li>{this.state.data.meals[0].strMeasure7} {this.state.data.meals[0].strIngredient7}</li>
                                        <li>{this.state.data.meals[0].strMeasure8} {this.state.data.meals[0].strIngredient8}</li>
                                        <li>{this.state.data.meals[0].strMeasure9} {this.state.data.meals[0].strIngredient9}</li>
                                        <li>{this.state.data.meals[0].strMeasure10} {this.state.data.meals[0].strIngredient10}</li>
                                        <li>{this.state.data.meals[0].strMeasure11} {this.state.data.meals[0].strIngredient11}</li>
                                        <li>{this.state.data.meals[0].strMeasure12} {this.state.data.meals[0].strIngredient12}</li>
                                        <li>{this.state.data.meals[0].strMeasure13} {this.state.data.meals[0].strIngredient13}</li>
                                        <li>{this.state.data.meals[0].strMeasure14} {this.state.data.meals[0].strIngredient14}</li>
                                        <li>{this.state.data.meals[0].strMeasure15} {this.state.data.meals[0].strIngredient15}</li>
                                        <li>{this.state.data.meals[0].strMeasure16} {this.state.data.meals[0].strIngredient16}</li>
                                        <li>{this.state.data.meals[0].strMeasure17} {this.state.data.meals[0].strIngredient17}</li>
                                        <li>{this.state.data.meals[0].strMeasure18} {this.state.data.meals[0].strIngredient18}</li>
                                        <li>{this.state.data.meals[0].strMeasure19} {this.state.data.meals[0].strIngredient19}</li>
                                        <li>{this.state.data.meals[0].strMeasure20} {this.state.data.meals[0].strIngredient20}</li>
                                    </ul>
                                    <YouTubeModal buttonLabel="Watch on YouTube" linkYoutube={this.state.linkYoutube}></YouTubeModal>
                                </section>

                            </article>
                        </div>
                        :
                        <div>
                            <div className="vs"><div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
                        </div>
                }
            </Row>
        );
    }
}

export default Random;
