import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../Products/products.slice";

interface CartProduct extends Product {
    amount: number;
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: [] as CartProduct[],
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const productIndex = state.findIndex(product => product.id === action.payload.id);
            if(productIndex !== -1){

            }else{
                state.push({...action.payload, amount: 1})
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            
        }
    }
})