import React, { useState } from "react";

interface ProductsListProps {

}

const initialProducts = [
    {title: 'fried chicken', price: 60, id: "eft"},
    {title: 'chocolate cake', price: 70, id: "hunt"},
    {title: 'Hell Let Loose', price: 55, id: "hll"},
]

interface Product {
    title: string,
    price: number,
    id: string
}

const ProductsList: React.FC<ProductsListProps> = ({}) => {
    const [products, setProducts] = useState<Product[]>(initialProducts);

    return(
        <div>
            <h2>Shopping cart</h2>
            {initialProducts.map(product => <div key={product.id}>
                <span>{`${product.title} : ${product.price}`}</span>
            </div>)}

            <button onClick={() => setProducts({
                title: "fried chicken",
                price: 100,
                id: 'hl'
            })}>
                Add Product
            </button>
        </div>
    );
}

export default ProductsList;