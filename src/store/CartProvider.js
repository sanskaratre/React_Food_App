import React,{useState} from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {

    const [items, setItems] = useState([]);
    
    const addItemToCart = (item) => {
        let hasItem = false;
        const newItemArray = [...items]
        newItemArray.forEach((element, index) => {
            if(item.id === element.id){
                hasItem = true;
                
                newItemArray[index].quantity = Number(newItemArray[index].quantity) + Number(item.quantity) ; 
            }
        })
        if(hasItem)
           setItems(newItemArray)
        else
            setItems([...items,item])
      }
    

    let remove = [];
    const removeItemToCart = ((item) => {
     remove = [...items];
     remove.forEach((element,index)=> {
         if(item.id === element.id){
             remove.splice(index,1)
            
             
         }
     })
    setItems(remove);
    });

    const cartContext = {
        items : items,
        totalAmount: 0,
        addItem: addItemToCart,
        removeItem: removeItemToCart
    }
    return <CartContext.Provider value = {cartContext}>
        {props.children}
    </CartContext.Provider>
};
export default CartProvider;