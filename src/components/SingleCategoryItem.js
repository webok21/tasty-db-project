import '../css/SingleCategoryItem.css'
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';


const SingleCategoryItem = (props) => {
    console.log(props)
    // let words = props.data.strMeal.split(" " , 4)
    return (
        <Col xs="12" md="6" lg="6" className="div-radius">
            <Link to={`/recipe/${props.data.idMeal}`}>
                <div className="categories-single-item">
                    <h2>{props.data.strMeal.split("with")[0]}</h2>
                    <img src={props.data.strMealThumb} alt="name"></img>
                </div>
            </Link>
        </Col >
    );
}

export default SingleCategoryItem;
