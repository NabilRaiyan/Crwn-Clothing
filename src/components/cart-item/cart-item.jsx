

const CartItem = ({cartItem})=>{
    const { name, quantity } = cartItem;
    return(
        <di>
            <h1>{name}</h1>
            <span>{quantity}</span>
        </di>
    )
}

export default CartItem;