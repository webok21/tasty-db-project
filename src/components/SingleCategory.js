import '../css/SingleCategory.css'
import '../css/Loader.css'


import React, { Component } from 'react';
import SingleCategoryItem from '../components/SingleCategoryItem';
import { Container, Row } from 'reactstrap';



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
            <Container>
            <Row id="categories">
                <div className="categories-name">
                    Everything {this.props.match.params.Id}
                </div>
            </Row>
           <Row className="categories-layout">
                {
                    this.state.isLoaded ?
                        this.state.data.meals.map((Key, idMeal) => <SingleCategoryItem
                            data={Key}
                            key={Key.idMeal}
                        />)
                        :
                        <div>
                            <div className="vs"><div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
                        </div>
                }
            </Row>
            </Container>
        );
    }
}

export default SingleCategory;
