import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderButtonCart.module.css';
import CardContext from '../../store/Cart-Context';

function HeaderButtonCart(props) {

    const [isBtnHighlighted, setIsBtnHighlighted] = useState(false);
    const cartCtx = useContext(CardContext);
    
    const {items} = cartCtx;

    // reduce() helps us to transform an array into a single value or number 
    const numberOfCartItems = items.reduce((currentNum, item) => {
        return currentNum + item.amount;
    }, 0);

    const buttonClasses = `${classes.button} ${ isBtnHighlighted ? classes.bump : ''}`

    useEffect(() => {
        if(items.length === 0){
            return;
        }
        setIsBtnHighlighted(true); 
        const timer = setTimeout(() => {
            setIsBtnHighlighted(false);
        }, 300)

        return () => {
            clearTimeout(timer);
        }

    }, [items])

    return (
        <button className={buttonClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}

export default HeaderButtonCart;
