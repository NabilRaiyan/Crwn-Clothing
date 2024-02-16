import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../shop-data.js';
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";


export const ProductsContext = createContext({
    products: [],
});


export const ProductsProvider = ({children})=>{
    const [ products, setProducts ] = useState([]);
    // useEffect(()=>{
    //     addCollectionAndDocuments('category', SHOP_DATA)
    // }, []);
    const value = {products};
    return(
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    );
};