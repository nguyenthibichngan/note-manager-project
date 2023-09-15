import React from "react";

interface ProductsListProps {

}

const initialProducts = [
    {title: 'Excape From Tarkov', price: 60, id: "1"},
    {title: 'Excape From Tarkov', price: 60, id: "1"},
    {title: 'Excape From Tarkov', price: 60, id: "1"},
]

const ProductsList: React.FC<ProductsListProps> = ({}) => {
    return(
        <div>
            <label>Hi ngan</label>
        </div>
    );
}

export default ProductsList;