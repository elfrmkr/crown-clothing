import CartActionTypes from './cart.types';
import {addItemToCart} from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems:[] 
};

// Adding the item into the array whenever the user clicks it
const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
    //spreading in all of the array values(from existing array) and any additional values are added in the end
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
            default:
                return state;    
    }
};
export default cartReducer;