import { createSlide } from '@reduxjs/toolkit';

interface Product {
    title: string,
    price: number,
    id: string
}

const initialProducts: Product[] = [
    {title: 'fried chicken', price: 60, id: "eft"},
    {title: 'chocolate cake', price: 70, id: "hunt"},
    {title: 'Hell Let Loose', price: 55, id: "hll"},
]

const productsSlice = createSlide({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            return [action.payload, ...state]
        }
    }
})

export default productsSlice.reducer;