import React, {useContext} from 'react';
import classes from  './HeaderCardButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'

const HeaderCardButton = (props) =>{

      const cartCtx = useContext(CartContext);
    const numberOfcartItems = cartCtx.items.reduce((cartNumber, item) =>{
        return cartNumber + item.amount;
    }, 0);
return <button className = {classes.button} onClick ={props.onClick}>
<span className ={classes.icon}>
<CartIcon/>
</span>
<span>
Your Cart
</span>
<span className = {classes.badge}>
{numberOfcartItems}
</span>
</button>

}

export default HeaderCardButton;