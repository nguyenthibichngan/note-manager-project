import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsSelector } from "./products.slice";

const ProductsList: React.FC = () => {
    const products = useSelector(getProductsSelector)
    const dispatch = useDispatch();
    
    const removeFromStore = (id:string) => {
        dispatchEvent(removeProduct(id))
    }

    return(
        <div>
            <h2>Shopping cart</h2>
            {products.map(product => <div key={product.id}>
                <span>{`${product.title} : ${product.price}`}</span>
                <button onClick={() => removeFromStore(product.id)}>Remove</button>
            </div>)}


        </div>
    );
}

export default ProductsList;