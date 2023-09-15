import React from 'react';
import { UseAppSelector, useAppDispatch } from '../store.hooks';
import { getCartProducts, getTotalPrice, removeFromCart } from './cart.slice';

interface CartProps{

}

const Cart: React.FC<CartProps> = () => {
    const cartProducts = UseAppSelector(getCartProducts)
    const totalPrice = UseAppSelector(getTotalPrice)
    const dispatch = useAppDispatch()

    const handleRemoveFromCart = (productId: string) => dispatch(removeFromCart(productId))

    return (
        <div>
            <h2>Cart</h2>
            <h5>{totalPrice}</h5>
            {cartProducts.map(product => (
                <div key={product.id}>
                    <span>{product.title}</span>
                    <span>    </span>
                    <span>{product.amount}</span>
                    <span>    </span>

                    <button onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
                </div>
            ))}
        </div>
    )
}

export default Cart;