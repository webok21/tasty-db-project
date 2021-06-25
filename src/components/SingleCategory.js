
import '../css/SingleCategory.css'

import React, { Component } from 'react';
import SingleCategoryItem from '../components/SingleCategoryItem';
import { Row } from 'reactstrap';


class SingleCategory extends Component {
    state = {
        data: [],
        isLoaded: false
    }
    componentDidMount() {
        let id = this.props.match.params.Id
        console.log(id)
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
            .then((result) => result.json())
            .then((result) => result)
            .then((result) => this.setState({ data: result, isLoaded: true }))
        console.log(this.state.data);
        console.log(JSON.stringify(this.state.data));
    }

    render() {
        return (
<<<<<<< HEAD
            <Row lg="1" className="Categories">
                <div className="categories-name">
                    Everything {this.props.match.params.Id}
                </div>
                {
                    this.state.isLoaded ?
                        this.state.data.meals.map((Key, idMeal) => <SingleCategoryItem
                            data={Key}
                            key={Key.idMeal}
                        />)
=======
            
            <Row className="Categories">
                
                    this.state.isLoaded ?
                        <div className="categories-name">
                            Everything {this.props.match.params.Id}
                            
                            {this.state.data.meals.map((Key, idMeal) => <SingleCategoryItem
                                data={Key}
                                key={Key.idMeal}
                            />)}
                            
                        </div>
>>>>>>> e785884c283a32f515d54e6e5f0cd91a26a8de7f
                        :
                        <div>
                            Loading...
                        </div>
<<<<<<< HEAD
                }
            </Row>
=======
                        
                
                </Row>

>>>>>>> e785884c283a32f515d54e6e5f0cd91a26a8de7f
        );
    }
}

export default SingleCategory;
