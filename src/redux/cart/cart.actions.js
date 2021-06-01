import CartActionTypes from './cart.types';

// actions can have a type value and a payload value
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});
// dispatches clear from cart value
export const clearItemFromCart = item =>({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});