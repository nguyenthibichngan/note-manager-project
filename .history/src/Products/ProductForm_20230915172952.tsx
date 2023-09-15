import React, { useState } from "react";
import { Product, addProduct } from "./products.slice";
import { useDispatch } from "react-redux";

const ProductForm: React.FC = () => {
    const dispatch = useDispatch();

    const generateRandomId = () => {
        const randomId = Math.random().toString(36).substring(7);
        return randomId;
      };

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
        const product_ = ({
            ...product,
            id: generateRandomId(),
          });
        dispatch(addProduct(product_))
        setproduct({
            id: '',
            title: '',
            price: 0
        })
    }

    return <div>
        <h2>Add to shopping cart</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" name="title" value={product.title} onChange={handleChange} />
            <input type="number" min="0" placeholder="Price" name="price" value={product.price} onChange={handleChange} />
            <button type="submit">Add price</button>
        </form>
    </div>
}

export default ProductForm;