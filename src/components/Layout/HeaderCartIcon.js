import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartIcon.module.css';

const HeaderCartIcon = (props) => {
    return (
        <button className={classes.button}>
            <span className={classes.icon}>
              <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>2</span>
        </button>
    )
};

export default HeaderCartIcon;