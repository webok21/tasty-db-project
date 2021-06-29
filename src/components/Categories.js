import React, { Component } from 'react';
import axios from 'axios';
import CategoriesItem from './C';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Categories extends Component {
  state = {
        data: [],
        isLoaded: false,
    }
    loadData = () => {
        this.setState({ isLoaded: true});
        return axios
            .get(
                `https://www.themealdb.com/api/json/v1/1/categories.php`
            )
            .then(result => {
                this.setState({
                    data: result.data.categories,
                    isLoaded: false,
                    error: false
                });
            })
            .catch(error => {
                console.error("error: ", error);
                this.setState({
                    error: `${error}`,
                
                });
            });
    };
    componentDidMount() {
        this.loadData();
    }
    render() {
        return (
            <Row id="Categories">
                <h2 className="sectionheading">Or go through our categories</h2>
                {this.state.data.map((Key, idCategory) => <CategoriesItem
                    data={Key}
                    key={Key.idCategory}
                />)}
           <Col xs="12" md="6" lg="4">
            <div className="categoriesItem div-radius" style={{ backgroundColor: 'var(--orange)'}}>
            <Link to="/random">
                <h3>Random Meal</h3>
                <img src="/img/blind.png" alt="name"></img>      
        </Link>
        </div>
        </Col>
            </Row>
        );
    }
}

export default Categories;
