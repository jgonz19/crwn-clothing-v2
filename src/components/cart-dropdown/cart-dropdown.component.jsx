import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import {CartDropdownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles.jsx';
import Button from '../button/button.component';
import CartItem from '../card-item/cart-item.component';

const CartDropdown = () =>{
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }
    return(
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length > 0 ? (cartItems.map(item => 
                        <CartItem key={item.id} cartItem={item}
                    />)):(<EmptyMessage>Your cart is empty</EmptyMessage>)
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>Checkout</Button>
        </CartDropdownContainer>

    )
}

export default CartDropdown;