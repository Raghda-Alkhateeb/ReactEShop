export const initState = {
    cart: []
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "Add_To_Cart": return { ...state, 
            cart: [...state.cart, action.item] }

        default: return state
    }
}