import React, { useReducer } from 'react'

import CardContext from './Cart-Context';

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const cartItemExistIndex = state.items.findIndex( item => 
            item.id === action.item.id
        );

        const cartItemExist = state.items[cartItemExistIndex]; 

        let updatedItems;

        if(cartItemExist){
            const updatedItem = {
                ...cartItemExist, 
                amount: cartItemExist.amount + action.item.amount 
            }
            updatedItems = [...state.items];
            updatedItems[cartItemExistIndex] = updatedItem;
        }else{
            updatedItems = state.items.concat(action.item); // concat creates a new array and add the element to it.
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if(action.type === "REMOVE"){ 
        const cartItemExistIndex = state.items.findIndex( item => 
            item.id === action.id
        );
        const cartItemExist = state.items[cartItemExistIndex]; 
        const updatedTotalAmount = state.totalAmount - cartItemExist.price;
        let updatedItems;
        
        if(cartItemExist.amount === 1){
            updatedItems = state.items.filter(item => item.id !== action.id);
        }else{
            const updatedItem = {...cartItemExist, amount: cartItemExist.amount - 1};
            updatedItems = [...state.items];
            updatedItems[cartItemExist] = updatedItem; 
        }
        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    return defaultCartState;
}

function CartProvider(props) {

    const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchAction({type: 'ADD', item: item});
    }

    const removeItemFromCartHandler = (id) => {
        dispatchAction({type: 'REMOVE', id: id});
    }

    const cartContext = {
        items: cartState.items,
        totalAmounSt: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CardContext.Provider value={cartContext}>
            {props.children}
        </CardContext.Provider>
    )
}

export default CartProvider;
