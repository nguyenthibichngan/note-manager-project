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
            <label>Hi ngan</label>
        </div>
    );
}

export default ProductsList;