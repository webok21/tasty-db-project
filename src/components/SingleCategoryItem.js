import '../css/SingleCategoryItem.css'



const SingleCategoryItem = (props) => {
    console.log(props)
    return (
        <div className="categoriesItem">
            <h2>{props.data.strMeal}</h2>
            <img src={props.data.strMealThumb} alt="name"></img>
        </div>
    );
}

export default SingleCategoryItem;
