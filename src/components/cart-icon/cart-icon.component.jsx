import React from 'react';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

const CartIcon = ({toggleCartHidden, itemCount}) =>(
    <div className = 'cart-icon' onClick = {toggleCartHidden} >
        <ShoppingIcon className ='shopping-icon '/>
        <span className = 'item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});
/* reduce -> native array method.
this operation also called selector, pulls of a slice of the state
- reduce is always returning a new value, always rendered everytime the state changes --> we don't want that, unrelated changes makes the function fired again.*/

/*u should do cashing of the selector value. If the items that the functions care about didn't change, no need for rendering( memoization )*/
const mapStateToProps = state => ({
    itemCount: selectCartItemsCount
});
export default connect(mapStateToProps, mapDispatchToProps) (CartIcon);