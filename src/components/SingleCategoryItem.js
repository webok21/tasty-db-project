import '../css/SingleCategoryItem.css'
import { Col } from 'reactstrap';


const SingleCategoryItem = (props) => {
    console.log(props)
    return (
        <Col xs="12" md="6" lg="6" className="categories-single-item">
            <h2>{props.data.strMeal}</h2>
            <img src={props.data.strMealThumb} alt="name"></img>
        </Col>
    );
}

export default SingleCategoryItem;
