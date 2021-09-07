import React from 'react';
import meals from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderButtonCart from './HeaderButtonCart';

function Header() {
    return (
        <>
            <header className={classes.header}>
                <h1>Dino Meals</h1>
                <HeaderButtonCart />
            </header>

            <div className={classes['main-image']}>
                <img src={meals} alt=" table full of foods" />
            </div>
        </>
    )
}

export default Header;
