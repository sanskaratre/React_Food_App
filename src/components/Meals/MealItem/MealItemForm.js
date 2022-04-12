import React,{useContext} from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import CartCntxt from '../../../store/cart-context';

const MealItemForm = (props) => {

  const cartcntx = useContext(CartCntxt);
  const addToCart = (event) => {
    event.preventDefault();
    const quantity = document.getElementById('amount_' + props.id).value
  console.log(quantity)
    cartcntx.addItem({...props.item, quantity: quantity })
  };

  

    return (
        <form className = {classes.form}>
            <Input label = "Amount" 
              input = {{
              
                id : 'amount_' + props.id,               
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
                
              }}/>
             
            <button onClick={addToCart}>+ Add</button>
        </form>
    )
};

export default MealItemForm;