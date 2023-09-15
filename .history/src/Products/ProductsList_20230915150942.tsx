import React, { useState } from "react";
import { useSelector } from "react-redux";

interface ProductsListProps {

}


const ProductsList: React.FC<ProductsListProps> = ({}) => {
    const products = useSelector(getProductsSelector)

    return(
        <div>
            <h2>Shopping cart</h2>
            {products.map(product => <div key={product.id}>
                <span>{`${product.title} : ${product.price}`}</span>
            </div>)}


        </div>
    );
}

export default ProductsList;