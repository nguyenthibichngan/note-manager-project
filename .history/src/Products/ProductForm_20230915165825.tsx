import React, { useState } from "react";
import { Product, addProduct } from "./products.slice";
import { useDispatch } from "react-redux";

const ProductForm: React.FC = () => {
    const dispatch = useDispatch();

    const [product, setproduct] = useState<Product>({
        id: '',
        title: '',
        price: 0
    })

    const handleChange = ({target: {name, value}}: React.ChangeEvent<HTMLInputElement>) => {
        setproduct(prev => {
            (prev as any)[name] = value;
            const newValue = {...prev}
            return newValue;
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(product);
        dispatch(addProduct(product));
    }

    return <div>
        <h2>Add to shopping cart</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" name="title" value={product.title} onChange={handleChange} />
            <input type="number" placeholder="Price" name="price" value={product.price} onChange={handleChange} />
            <input type="text" placeholder="Id" name="id" value={product.id} onChange={handleChange} />
            <button>Add price</button>
        </form>
    </div>
}

export default ProductForm;