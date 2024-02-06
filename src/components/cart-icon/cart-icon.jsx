
import './cart-icon.styles.scss';
import { ReactComponent as ShoopingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

// creating cart icon
const CartIcon = ()=>{
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    const toggleIsCartOpen = ()=>{
        setIsCartOpen(!isCartOpen)
    }
    return(
        <div className='cart-icon-container'>
            <ShoopingIcon className='shopping-icon' onClick={toggleIsCartOpen}/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;