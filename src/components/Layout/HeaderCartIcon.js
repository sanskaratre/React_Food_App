import {useContext} from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartIcon.module.css';

const HeaderCartIcon = (props) => {

    const cartCntxt = useContext(CartContext);
    let quantity = 0;
    cartCntxt.items.forEach(item => {
        quantity = quantity +  Number(item.quantity) 
    } )

    return (
        <button className={classes.button} onClick={props.onClicking}>
            <span className={classes.icon}>
              <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{quantity} </span>
        </button>
    )
};

export default HeaderCartIcon;