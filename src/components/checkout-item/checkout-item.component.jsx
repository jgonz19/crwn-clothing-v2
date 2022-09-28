import {CheckoutItemContainer, ImageContainer, Image, Name, Quantity, Price, Arrow, Value, RemoveButton} from './checkout-item.styles.jsx';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const CheckoutItem = ({cartItem}) => {
    const {deleteItem , addItemToCart, removeItemFromCart} = useContext(CartContext);
    const {name, imageUrl, price, quantity} = cartItem;
    const clearItemHandler = () => deleteItem(cartItem);
    const incrementHandler = () => addItemToCart(cartItem);
    const decrementHandler = () => removeItemFromCart(cartItem);
    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={decrementHandler}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <div onClick={incrementHandler}>
                    &#10095;
                </div>
            </Quantity>
            <Price>$ {price}</Price>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
            
        </CheckoutItemContainer>
    )
}
export default CheckoutItem;