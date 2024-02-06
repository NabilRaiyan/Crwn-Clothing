import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'
import './cart-dropdown.styles.scss'
import Button from '../button-component/button'
import CartItem from '../cart-item/cart-item'

// making card drop down functionality
const CartDropDown = ()=>{
    const {cartItems} = useContext(CartContext);
    // useing useNavigate() hook to navigate to the checkout page after click button
    const navigate = useNavigate();
    const useNavigateHandler = ()=>{
        navigate('/checkout')
    }
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items '>
                {
                    cartItems.map((item)=>{
                        return(
                            <CartItem key={item.id} cartItem={item}></CartItem>
                        );
                    })
                }
            </div>
            <Button onClick={useNavigateHandler}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropDown;