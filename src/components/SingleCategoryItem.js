import '../css/SingleCategoryItem.css'
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';


const SingleCategoryItem = (props) => {
    console.log(props)
    return (
        <Col xs="12" md="6" lg="6">
<<<<<<< HEAD
            <Link to={`/recipe/${props.data.idMeal}`}>
                <div className="categories-single-item div-radius" style={{ backgroundColor: (props.data.idMeal % 2 === 0) ? 'var(--orange)' : 'var(--pink)' }}>
                <h2>{props.data.strMeal}</h2>
                <img src={props.data.strMealThumb} alt="name"></img> 
=======
            <div className="categories-single-item div-radius" style={{ backgroundColor: (props.data.idMeal % 2 === 0) ? 'var(--orange)' : 'var(--pink)' }}>

                <h3 className="itemsDescription reduced">{props.data.strMeal}</h3>
                <img src={props.data.strMealThumb} alt="name"></img>
>>>>>>> 5cdf29dc9a2aba2dfcfa491abe89c885078acb67
            </div>
            </Link>
        </Col>
    );
}

export default SingleCategoryItem;
