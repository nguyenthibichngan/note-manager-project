import { configureStore } from '@reduxjs/toolkit';
import products from "./Products/products.slice";

const store = configureStore({
    reducer: {
        products
    }
})

export type Root

export default store;