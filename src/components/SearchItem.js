import '../css/SingleCategoryItem.css'
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';


const SearchItem = (props) => {
    console.log(props)
    return (
        <Col xs="12" md="6" lg="6">
            <Link to={`/recipe/${props.data.idMeal}`}>
                <div className="categories-single-item div-radius" style={{ backgroundColor: (props.data.idMeal % 2 === 0) ? 'var(--orange)' : 'var(--pink)' }}>
                <h2>{props.data.strMeal}</h2>
                <img src={props.data.strMealThumb} alt="name"></img> 
            </div>
            </Link>
        </Col>
    );
}

export default SearchItem;