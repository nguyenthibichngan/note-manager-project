import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product, getProductsSelector, removeProduct } from "./products.slice";
import { addToCart } from "../Cart/cart.slice";

const ProductsList: React.FC = () => {
    const products = useSelector(getProductsSelector)
    const dispatch = useDispatch();

    const removeFromStore = (id:string) => {
        dispatch(removeProduct(id))
    }

    const addToCartHandler = (product: Product) => dispatch(addToCart(product))

    return(
        <div>
            <h2>Shopping cart</h2>
            {products.map(product => <div key={product.id}>
                <span>{`${product.title} : ${product.price}`}</span>
                <button onClick={() => addToCartHandler(product)}>Add to cart</button>
                <span></span>

                <button onClick={() => removeFromStore(product.id)}>Remove</button>
            </div>)}


        </div>
    );
}

export default ProductsList;