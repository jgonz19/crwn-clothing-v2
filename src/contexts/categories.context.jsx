import { createContext, useState, useEffect } from "react";
//import SHOP_DATA from '../shop-data.js'
//import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";


//this context is what we use on other component
export const CategoriesContext = createContext({
    categories: {},
});


// this component is use on the index.js to wrap the component that will be using this information
export const CategoriesProvider = ({children}) =>{
    const [categoriesMap, setCategoriesMap] = useState({});
    //the value below is what we need to start feeling up
    /*useEffect(()=>{
        addCollectionAndDocuments("categories", SHOP_DATA) //first argument is the name of the categorie/collection, second is the data
    },[])*/ //we delete this useEffect otherwise it tries to running and add new values everytime we run it
    
    useEffect(()=>{
        const getCategoriesMap = async()=>{//we need to call it with async function 
                                            //cuz the return value is async function
            const categoryMap = await getCategoriesAndDocuments(); //return always hat await
            setCategoriesMap(categoryMap)
        };
        
        getCategoriesMap();

    },[])
    const value = {categoriesMap};
return(
    <CategoriesContext.Provider value={value}>
        {children}
    </CategoriesContext.Provider>
    )
};