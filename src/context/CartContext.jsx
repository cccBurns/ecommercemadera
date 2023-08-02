import React, { useState } from "react";
export const CartContext = React.createContext([]);


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    const clearCart = () => setCart([]);



    return(
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider