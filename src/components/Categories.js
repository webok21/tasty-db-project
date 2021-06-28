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
        show:false

    }
    loadData = () => {
        this.setState({ isLoaded: true, show:true });
        return axios
            .get(
                `http://www.themealdb.com/api/json/v1/1/categories.php`
            )
            .then(result => {
                console.log(result);
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
            this.state.show?
            <Row>
                <h2 class="sectionheading">Or go through our categories</h2>
                {this.state.data.map((Key, idCategory) => <CategoriesItem
                    data={Key}
                    key={Key.idCategory}
                />)}
           
           <Col xs="12" md="6" lg="4">
            <div className="categoriesItem div-radius" style={{ backgroundColor: 'var(--orange)'}}>
            <Link to="/random">
                <h3>Random Meal</h3>
                <img src="./img/blind.png" alt="name"></img>
                    
        </Link>
        </div>
        </Col>
                
            </Row>
             
            :<div></div>
        );
    }
}

export default Categories;
