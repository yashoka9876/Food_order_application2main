import { useReducer } from "react";
import CartContext from "./cart-context"

const defaultCartState={
    items:[],
    totalAmount:0
};

const CartReducer=(state,action)=>{
    if(action.type ==='ADD'){
        // const updatedItems= state.items.concat(action.item);


       const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
       
       const existingCartItem = state.items[existingCartItemIndex]
       

        // let updatedItem;
        let updatedItems;

        if(existingCartItem){
           const updatedItem={
                ...existingCartItem,
                amount:existingCartItem.amount + action.item.amount
            }
            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex]=updatedItem;
        }else{
            updatedItems=state.items.concat(action.item)
        }

       const updatedTotalAmount=state.totalAmount + action.item.price * action.item.amount;
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        };
    }
    if(action.type === 'REMOVE'){

    }
    return defaultCartState
}

const CartProvider=(props)=>{
   const [cartState,dispatchCartAction]=useReducer(CartReducer,defaultCartState)

    const addItemToCartHandler= item =>{
        dispatchCartAction({type:'ADD',item:item});
    };

    const removeItemFromCartHandler = id =>{
        
    };

    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    console.log(cartState.items)
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider