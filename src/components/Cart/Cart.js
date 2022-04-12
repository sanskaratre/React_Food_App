import React,{useContext} from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartCntxt from '../../store/cart-context'
import CartItem from './CartItem';

const Cart = (props) => {
    
    const cartcntx = useContext(CartCntxt)

    

    const removeFromCart = (item) => {
    
   // const quantity = document.getElementById('amount_' + props.id).value
    if(item.quantity>0){
        cartcntx.addItem({...item, quantity: -1 })
    }   
    else
    cartcntx.removeItem(item)
  };
  
  const addItem = (item) => {

    cartcntx.addItem({...item, quantity: 1 })
  }

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartcntx.items.map((item) => (   
                
                <CartItem key={item.id}
                     name={item.name}
                     quantity={item.quantity}
                     price={item.price}
                     onAdd={addItem.bind(null,item)}
                     onRemove={removeFromCart.bind(null,item)}
     /> 
            
               
            ))}  
        </ul>
    );

    let sum = 0;
    cartcntx.items.forEach(item => {
        sum = sum + Number(item.quantity*Number(item.price));
    } )

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${sum.toFixed(2)}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
};

export default Cart;