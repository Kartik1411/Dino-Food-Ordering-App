import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

function Cart(props) {

    const cartItems = <ul className={classes['cart-items']}>{[{
        id: 'c1',
        name: 'shushi',
        amount: 2,
        price: 12.3
    }].map(item => <li>{item.name}</li>)}</ul>

    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.65</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.close}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;
