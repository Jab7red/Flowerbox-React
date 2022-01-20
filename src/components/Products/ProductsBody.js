const ProductBody = ({name, price, tags}) => {
    return(
        <div>
            <h5>{name}</h5>
            <p>{price}</p>
            <p>{tags}</p>
        </div>
    );
}

export default ProductBody;