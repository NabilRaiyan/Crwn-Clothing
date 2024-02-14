import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";
import "./checkout-item.styles.scss";
// funtion for checkout functionality
const CHECKOUT = ()=>{
    const {cartItems, addItemToCart, removeItemToCart} = useContext(CartContext)
    return(
        <div className="checkout-container">
            <div className="checkout-block">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
        {   
            // getting items form list
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
                    <span onClick={()=>removeItemToCart(cartItem)}>decrement</span>
                </div>
                
            )})
        } 
        <span className="Total">Total: </span>
        </div>
    )
}

export default CHECKOUT;