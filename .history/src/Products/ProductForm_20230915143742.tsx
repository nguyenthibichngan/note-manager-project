import React from "react";

interface ProductFormProps {

}

const ProductForm: React.FC<ProductFormProps> = ({}) => {
    return <div>
        <h2>Add</h2>
        <form>
            <input type="text" placeholder="Title" name="title" />
            <input type="number" placeholder="Price" name="price" />
            <input type="text" placeholder="Id" name="id" />
            <button>Add price</button>
        </form>
    </div>
}

export default ProductForm;