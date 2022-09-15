import { createContext, useState } from "react";
import PRODUCTS from '../shop-data.json'

//this context is what we use on other component
export const ProductsContext = createContext({
    products: [],
});


// this component is use on the index.js to wrap the component that will be using this information
export const ProductProvider = ({children}) =>{
    const [products, setProducts] = useState(PRODUCTS);
    const value = {products};
    //the value below is what we need to start feeling up

return(
    <ProductsContext.Provider value={value}>
        {children}
    </ProductsContext.Provider>
    )
};