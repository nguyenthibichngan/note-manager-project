import React, { useState } from "react";
import { useSelector } from "react-redux";

interface ProductsListProps {

}


const ProductsList: React.FC<ProductsListProps> = ({}) => {
    const products = useSelector(setPro)

    return(
        <div>
            <h2>Shopping cart</h2>
            {products.map(product => <div key={product.id}>
                <span>{`${product.title} : ${product.price}`}</span>
            </div>)}

            <button onClick={() => setProducts(prevProducts => [{
                title: "hiii",
                price: 100,
                id: "heee"
            }, ...prevProducts])}>
                Add Product
            </button>
        </div>
    );
}

export default ProductsList;