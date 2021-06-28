import { Link } from "react-router-dom";
import { Col } from 'reactstrap';
// import CSS 
import './../css/CategoriesItem.css'



const CategoriesItem = (props) => {
    console.log(props)
    return (

        <Col xs="12" md="6" lg="4">
            <div className="categoriesItem div-radius" style={{ backgroundColor: (props.data.idCategory % 2 === 0) ? 'var(--pink)' : 'var(--orange)' }}>
                <Link to={`/meals/${props.data.strCategory}`}><h3>{props.data.strCategory}</h3>
                    <img src={props.data.strCategoryThumb} alt="name"></img></Link>
                    <Link to="/random"><div className="categoriesItem div-radius">
            <h3>Random</h3>
        </div></Link>
   
            </div>
        </Col >
      
       
        

    );
}

export default CategoriesItem;


