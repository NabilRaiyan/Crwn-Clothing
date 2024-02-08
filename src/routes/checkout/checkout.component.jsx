import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
// funtion for checkout functionality
const CHECKOUT = ()=>{
    const {cartItems, addItemToCart} = useContext(CartContext)
    return(
        <div>
            <h1>CHECKOUT PAGE</h1>
            <div>
            {   // getting items form list
                cartItems.map((cartItem)=>{
                    const {id, name, quantity} = cartItem;
                    const itemIncreaseHandler = ()=>{
                        addItemToCart(cartItem)
                    }
                    return(
                    <div  key={id}>
                        <h2>{name}</h2>
                        <span>{quantity}</span> 
                        <br />
                        <span onClick={itemIncreaseHandler}>increment</span>
                        <br />
                        <span>decrement</span>
                    </div>
                    
                )})
            }
                
            </div>
        </div>
    )
}

export default CHECKOUT;