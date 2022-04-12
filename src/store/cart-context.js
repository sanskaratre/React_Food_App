import React from "react";

const CartContext = React.createContext({
    items : [],
    price : 0,
    totalAmount : 0,
    addItem: (item) => {},

    removeItem: (item) => {}
});

export default CartContext;