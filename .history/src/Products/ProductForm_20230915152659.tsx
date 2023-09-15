import React, { useState } from "react";

const ProductForm: React.FC = () => {
    const [product, setproduct] = useState<Product>
    return <div>
        <h2>Add to shopping cart</h2>
        <form>
            <input type="text" placeholder="Title" name="title" />
            <input type="number" placeholder="Price" name="price" />
            <input type="text" placeholder="Id" name="id" />
            <button>Add price</button>
        </form>
    </div>
}

export default ProductForm;