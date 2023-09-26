import React, { createContext, useContext, useReducer} from 'react'

export const CartContext = createContext()

export const CartProvider =({children})=>{
     const initState = {
        cart: [],
        
    }
    
     const reducer = (state, action) => {
        switch (action.type) {
            case "Add_To_Cart": return { ...state, 
                cart: [...state.cart, action.item] };
              case"Update_Count" :return{...state,
                cart:[...state.cart.map(item => item.id === action.id?
                     {...item,count:action.count} : item)]};
                     case "Remove-From-Cart": return {...state, 
                        cart: state.cart.filter(item => item.id!== action.id) };
              
              default: return state
        }
    }
   const cart = useReducer(reducer,initState)
    return(
<CartContext.Provider value={cart} >
    {children}
</CartContext.Provider>
    )

}

export const CartUseValue=()=>{
 return useContext(CartContext)}
    