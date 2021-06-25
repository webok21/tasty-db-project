import '../css/SingleCategoryItem.css'
import { Col } from 'reactstrap';


const SingleCategoryItem = (props) => {
    console.log(props)
    return (
        <Col xs="12" md="6" lg="6">
            <div className="categories-single-item div-radius" style={{ backgroundColor: (props.data.idMeal % 2 === 0) ? 'var(--orange)' : 'var(--pink)' }}>

                <h3 className="itemsDescription reduced">{props.data.strMeal}</h3>
                <img src={props.data.strMealThumb} alt="name"></img>
            </div>
        </Col>
    );
}

export default SingleCategoryItem;
