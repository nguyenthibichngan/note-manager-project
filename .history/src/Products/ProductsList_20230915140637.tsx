import React from "react";

interface ProductsListProps {

}

const initialProducts = [
    {title: 'Excape From Tarkov', price: 60, id: "eft"},
    {title: 'Hunt: Showdown', price: 70, id: "hunt"},
    {title: 'Hell Let Loose', price: 55, id: "hll"},
]

const ProductsList: React.FC<ProductsListProps> = ({}) => {
    return(
        <div>
            <h2>Hi ngan</h2>
            {initialProducts.map(product => <div key={product.id}>
                <span>{`${product.title} : ${product.price}`}</span>
            </div>)}
        </div>
    );
}

export default ProductsList;