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

    // clearing items from cart
    const clearCartItem = (cartItems, cartItemToClear)=>{
        return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
        
    }


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=>{},
    cartItem: [],
    addItemToCart: ()=>{},
    removeItemFromCart: ()=>{},
    clearItemFromCart: ()=>{},
    cartCount: 0,
    cartTotal: 0,
})

// cart provider
export const CartProvider = ({children})=>{
    const [isCartOpen, setIsCartOpen ] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);


    useEffect(()=>{
        const newCartCount = cartItems.reduce((totalItem, cartItem)=> totalItem + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems]);


    useEffect(()=>{
        const newCartTotal = cartItems.reduce((totalItem, cartItem)=> totalItem + cartItem.quantity * cartItem.price, 0)
        setCartTotal(newCartTotal)
    }, [cartItems]);


    const addItemToCart = (productToAdd)=>{
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    // removing items from cart
    const removeItemToCart = (cartItemToRemove)=>{
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }

    // clear items from cart
    const clearItemFromCart = (cartItemToClear)=>{
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    }


    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount,cartTotal, removeItemToCart, clearItemFromCart}
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}