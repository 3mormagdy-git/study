import { ProductsData } from "../compounts/ProductData";
import React, { createContext, useState } from 'react'
export const ShopContext = createContext(null);
export const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < ProductsData; i++) {
        cart[i] = 0;
    }
    return cart;
};
export const ShopContextProvider =(props)=> {
  
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addToCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: (prev[itemID] || 0) + 1 }));
  };
  const removeFromCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: Math.max((prev[itemID] || 0) - 1, 0) }));
  };
  const updateCartItemCount = (newAmount, itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: newAmount }));
  };
        
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = ProductsData.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
    }
    return totalAmount;
  };
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    getTotalCartItems,
  };
            
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
        
        
        
            
}