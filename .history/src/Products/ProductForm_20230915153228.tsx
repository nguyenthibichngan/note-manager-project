import React, { useState } from "react";
import { Product } from "./products.slice";

const ProductForm: React.FC = () => {
    const [product, setproduct] = useState<Product>({
        id: '',
        title: '',
        price: 0
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setproduct(prev => {
            (prev as any)[name] = value;
            const newValue = {...prev}
            return newValue;
        })
    }

    return <div>
        <h2>Add to shopping cart</h2>
        <form>
            <input type="text" placeholder="Title" name="title" value={product.title} />
            <input type="number" placeholder="Price" name="price" value={product.price} />
            <input type="text" placeholder="Id" name="id" value={product.id} />
            <button>Add price</button>
        </form>
    </div>
}

export default ProductForm;