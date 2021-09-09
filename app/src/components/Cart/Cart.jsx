import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/Cart-Context';
import CartItem from './CartItem';

function Cart(props) {

    const cartCtx = useContext(CartContext)

    const finalAmount = `$${cartCtx.totalAmount}`;

    const hasItems = cartCtx.items.length > 0;

    const cartItemremoveHandler = (id) => {
        cartCtx.removeItem(id);
    }

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    }

    const cartItems = <ul className={classes['cart-items']}>{
        cartCtx.items.map(item => 
            <CartItem id={item.id} name={item.name} amount={item.amount} 
            price={item.price} onRemove={cartItemremoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}>{item.name}
            </CartItem>
        )}
    </ul>

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{finalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={classes.close}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;
