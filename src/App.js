import React,{Fragment,useState} from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";


function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCart = () => {
    setCartIsShown(true);
  };

  const hideCart = () => {
    setCartIsShown(false);
  };


  return (
    <Fragment>
     { cartIsShown  && <Cart onClose={hideCart} />}
      <Header onShowCart = {showCart}></Header>
      <main>
        <Meals />
      </main>
      
    </Fragment>
    
  );
}

export default App;
