import { createContext, useEffect, useState} from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id); //give true back if there already a product
    if(existingCartItem){ //we prove the variable and the map to look for 
                            //the correct variable and sum 1 to the correct variable
        return cartItems.map((cartItem)=>
            cartItem.id === productToAdd.id
                ? {...cartItem, quantity:cartItem.quantity + 1}
                : cartItem
        );
    }
    return [...cartItems,{...productToAdd, quantity:1}];//we give back an array with the new product, 
                                                        //if there is not product already
}
const removeCartItem = (cartItems, cartItemToRemove) =>{
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id);
    if(existingCartItem.quantity === 1){
        return cartItems.filter((cartItem)=> cartItem.id !== cartItemToRemove.id);
    }
    return cartItems.map((cartItem)=>
        cartItem.id === cartItemToRemove.id
            ? {...cartItem, quantity:cartItem.quantity - 1}
            : cartItem
    );
}

const deleteItemFromCart = (cartItems, itemToRemove) =>{
            return cartItems.filter((cartItem)=> cartItem.id !== itemToRemove.id);
}


export const CartContext = createContext( {
    isCartOpen: false,
    setIsCartOpen: () =>{},
    cartItems: [],
    addItemToCart: ()=>{},
    removeItemFromCart: ()=>{},
    deleteItem: ()=>{},
    cartCount : 0,
    total:0
});


export const CartProvider = ({children}) => {
    const[isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(()=>{
        const newTotal = cartItems.reduce((totalCost, cartItem)=>totalCost + (cartItem.quantity * cartItem.price),0);
        setTotal(newTotal)
    },[cartItems]);

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0);// null is is the initial vallue of total
        setCartCount(newCartCount);
    }, [cartItems])

    const addItemToCart = (productToAdd) =>{
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    const removeItemFromCart = (cartItemToRemove) =>{
        setCartItems(removeCartItem(cartItems,cartItemToRemove));
    }

    const deleteItem = (itemToRemove) =>{
        setCartItems(deleteItemFromCart(cartItems, itemToRemove));
    }

    

    const value = {isCartOpen, setIsCartOpen, addItemToCart,total ,cartItems , cartCount, deleteItem ,removeItemFromCart};
    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}