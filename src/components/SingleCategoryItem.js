import '../css/SingleCategoryItem.css'
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';


const SingleCategoryItem = (props) => {
    console.log(props)
    // let words = props.data.strMeal.split(" " , 4)
    return (
        <Col xs="12" md="6" lg="4" className="div-radius">
            
                <div className="categories-single-item">
                <Link to={`/recipe/${props.data.idMeal}`}>
                    {/* <h2>{props.data.strMeal.slice(0,20)}</h2> */}
                    <h2>{props.data.strMeal.split('with')[0]})</h2>
                    <img src={props.data.strMealThumb} alt="name"></img>
                    </Link>
                </div>
            
        </Col >
    );
}

export default SingleCategoryItem;
