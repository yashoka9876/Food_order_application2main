import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Headers from "./components/Layout/Headers";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";



function App() {
  const [cartItem,setCartItem]=useState(false);

  const cartItemHandler=()=>{
    setCartItem((value)=> !value);
  }
  return (
    <CartProvider>
      {cartItem &&<Cart  onCartItemHandler={cartItemHandler}/>}
      <Headers onCartItemHandler={cartItemHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
    
  );
}

export default App;