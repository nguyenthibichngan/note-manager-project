import { createSlide } from '@reduxjs/toolkit';

interface Product {
    title: string,
    price: number,
    id: string
}

const initialProducts = [
    {title: 'fried chicken', price: 60, id: "eft"},
    {title: 'chocolate cake', price: 70, id: "hunt"},
    {title: 'Hell Let Loose', price: 55, id: "hll"},
]