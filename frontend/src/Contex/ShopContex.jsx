import React, { createContext } from 'react'
import all_product from "../components/Asset/all_product"

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContex = createContext(null);

const ShopContexProvider = (props) => {

    const contextValue = {all_product};

    return (
        <ShopContex.Provider value={contextValue}>
            {props.children}
        </ShopContex.Provider>
    )
}

export default ShopContexProvider;