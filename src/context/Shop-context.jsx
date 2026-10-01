import React, { createContext, useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext';

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  
  const userId = user ? (user.id || user.email) : null;
  const storageKey = userId ? `cart_${userId}` : null;

  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    if (!userId || !storageKey) {
      setCartItems({});
      return;
    }

    const savedCart = localStorage.getItem(storageKey);
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error);
        setCartItems({});
      }
    } else {
      setCartItems({});
    }
  }, [userId, storageKey]);

  useEffect(() => {
    if (userId && storageKey) {
      localStorage.setItem(storageKey, JSON.stringify(cartItems));
    }
  }, [cartItems, userId, storageKey]);

  const addToCart = (itemId) => {
    if (!userId) {
      return;
    }

    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    if (!userId) return;

    setCartItems((prev) => {
      const updated = { ...prev };
      delete updated[itemId];
      return updated;
    });
  };

  const updateCartItemCount = (newAmount, itemId) => {
    if (!userId) return;

    setCartItems((prev) => {
      if (newAmount <= 0) {
        const updated = { ...prev };
        delete updated[itemId];
        return updated;
      }
      return {
        ...prev,
        [itemId]: newAmount,
      };
    });
  };

  const clearCart = () => {
    setCartItems({});
    if (storageKey) {
      localStorage.removeItem(storageKey);
    }
  };

  const getTotalCartAmount = (allProducts = []) => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allProducts.find((product) => String(product.id) === String(item));
        // تم التعديل هنا لتقرأ item.price بدلاً من new_price
        if (itemInfo && itemInfo.price) {
          const rawPrice = String(itemInfo.price).replace(/[^0-9.-]+/g, "");
          const price = parseFloat(rawPrice) || 0;
          totalAmount += price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    clearCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopContextProvider');
  }
  return context;
};