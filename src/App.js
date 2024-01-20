import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Headers from "./components/Layout/Headers";
import Meals from "./components/Meals/Meals";



function App() {
  const [cartItem,setCartItem]=useState(false);

  const cartItemHandler=()=>{
    setCartItem((value)=> !value);
  }
  return (
    <>
      {cartItem &&<Cart  onCartItemHandler={cartItemHandler}/>}
      <Headers onCartItemHandler={cartItemHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;