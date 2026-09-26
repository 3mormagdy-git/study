import React, { useContext } from "react";
import { ShopContext } from "../context/Shop-context";

export default function Cartitem(props) {
  const { id, name, price, img } = props.data;
  
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between border-b border-gray-700 py-4 px-6 text-white bg-gray-800/40 rounded-lg my-2">
      <img src={img} alt={name} className="w-20 h-20 object-cover rounded" />
      <div className="flex-1 ml-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-300">{price} EGP</p>
      </div>
      <div className="flex items-center gap-2">
        <button 
          onClick={() => removeFromCart(id)} 
          className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-xl font-bold cursor-pointer"
        >
          -
        </button>
        <input 
          value={cartItems[id]} 
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          className="w-12 text-center bg-gray-900 border border-gray-600 rounded text-white py-1" 
        />
        <button 
          onClick={() => addToCart(id)} 
          className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-xl font-bold cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
}