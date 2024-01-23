import './cart-icon.styles.scss';
import { ReactComponent as ShoopingIcon } from '../../assets/shopping-bag.svg';


const CartIcon = ()=>{
    return(
        <div className='cart-icon-container'>
            <ShoopingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;