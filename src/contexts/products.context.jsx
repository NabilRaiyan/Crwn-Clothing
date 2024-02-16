import { createContext, useState, useEffect } from "react";
// import SHOP_DATA from '../shop-data.js';
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";


export const ProductsContext = createContext({
    products: [],
});


export const ProductsProvider = ({children})=>{
    const [ products, setProducts ] = useState([]);
    // useEffect(()=>{
    //     addCollectionAndDocuments('category', SHOP_DATA)
    // }, []);

    useEffect(()=>{
        const getCategoryMap = async ()=>{
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
        }
        getCategoryMap();
    }, []);
    const value = {products};
    return(
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    );
};