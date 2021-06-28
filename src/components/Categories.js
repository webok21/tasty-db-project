import React, { Component } from 'react';
import axios from 'axios';
import CategoriesItem from './C';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import randomButton from "./randomButton";

class Categories extends Component {


    state = {
        data: [],
        isLoaded: false,
    }
    loadData = () => {
        this.setState({ isLoaded: true});
        return axios
            .get(
                `http://www.themealdb.com/api/json/v1/1/categories.php`
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
                    loading: false
                });
            });
    };
    componentDidMount() {
        this.loadData();
    }
    render() {
        return (
            <Row id="Categories">
                <h2 class="sectionheading">Or go through our categories</h2>
                {this.state.data.map((Key, idCategory) => <CategoriesItem
                    data={Key}
                    key={Key.idCategory}
                />)}
            </Row>
        );
    }
}

export default Categories;
