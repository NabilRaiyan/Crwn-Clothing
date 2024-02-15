import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

// funtion for checkout functionality
const CHECKOUT = ()=>{
    const {cartItems, cartTotal} = useContext(CartContext)
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
                
                return(
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                
            )})
        } 
        <span className="total">Total: {cartTotal}</span>
        </div>
    )
}

export default CHECKOUT;