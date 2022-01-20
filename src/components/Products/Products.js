import ProductsImg from './ProductsImg';
import ProductsBody from './ProductsBody';
import './Products.css'

const Product = (props) => {
    return (
        <div className="Products">
            <ProductsImg image={props.image}/>
            <ProductsBody
                {...props}
            />
        </div>
    );
}


export default Product;