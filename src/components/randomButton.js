import { Link } from "react-router-dom";
import { Col } from 'reactstrap';

const randomButton = () => {
    return (  
        <Col xs="12" md="6" lg="4">
            <div className="categoriesItem div-radius" style={{ backgroundColor: 'var(--pink)'}}>
                    <Link to="/random"><div className="categoriesItem div-radius">
            <h3>Random</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi dolores, vitae accusamus veniam architecto harum optio ut, nemo perferendis non saepe. Explicabo magnam dolor eaque obcaecati magni voluptates. Nihil, nulla.</p>
        </div></Link>
        </div>
        </Col>
    );
}
 
export default randomButton;