// import '../css/SingleCategoryItem.css'
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';


function hide() {
    setTimeout(() => {
        document.getElementById("searchresult").style.display = "none"
        document.getElementById("searchinput").value = ''
    }, 500);
}

const SearchItem = (props) => {
    console.log(props)
    return (
        <Col xs="12" md="4" lg="4" onClick={() => { hide() }}>
            <Link to={`/recipe/${props.data.idMeal}`}>
                <div className="result-item div-radius">
                    <h2>{props.data.strMeal}</h2>
                    <img src={props.data.strMealThumb} alt="name"></img>
                </div>
            </Link>
        </Col >
    );
}

export default SearchItem;
