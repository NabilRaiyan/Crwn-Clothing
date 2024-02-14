import { createContext, useState, useEffect } from "react";

// adding items to the cart
const addCartItem = (cartItems, productToAdd)=>{
    // find if cart item contains product to add
    const existingCartItem = cartItems.find((cartItem)=>
        cartItem.id === productToAdd.id)

    // if found, increment quantity
    if(existingCartItem){
        return cartItems.map((cartItem)=>
        cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        );
    }
    

    // return cartitems witn modified or new cartItem
    return [...cartItems, {...productToAdd, quantity: 1}];

}
    // removing items from cart
    const removeCartItem = (cartItems, cartItemToRemove)=>{
        const existingCartItem = cartItems.find((cartItem)=>
        cartItem.id === cartItemToRemove.id);

        // if item exist then remove
        if (existingCartItem.id === 1){
            return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
        }
        // remove the existing cart
        return cartItems.map((cartItem)=>
        cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
        );
    }


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=>{},
    cartItem: [],
    addItemToCart: ()=>{},
    removeItemFromCart: ()=>{},
    cartCount: 0,
})

// cart provider
export const CartProvider = ({children})=>{
    const [isCartOpen, setIsCartOpen ] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(()=>{
        const newCartCount = cartItems.reduce((toralItem, cartItem)=> toralItem + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems]);

    const addItemToCart = (productToAdd)=>{
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemToCart = (cartItemToRemove)=>{
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemToCart}
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}