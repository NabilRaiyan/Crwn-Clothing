import { createContext } from "react";
import PRODUCTS from '../shop-data.json';


export const productContext = createContext({});


export const productContextProvider = ({children})=>{
    return(
        <productContext.Provider>{children}</productContext.Provider>
)}