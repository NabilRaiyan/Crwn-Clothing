import './cart-dropdown.styles.scss'
import Button from '../button-component/button'
import CartItem from '../cart-item/cart-item'

const CartDropDown = ()=>{
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items '>
                {
                    [].map((item)=>{
                        return(
                            <CartItem cartItem={item}></CartItem>
                        );
                    })
                }
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropDown;