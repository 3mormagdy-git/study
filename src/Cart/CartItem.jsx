import React from 'react';
import { useShop } from '../context/Shop-context';

const Cartitem = ({ id, name, image, new_price, quantity }) => {
  const { removeFromCart, updateCartItemCount } = useShop();

  const rawPrice = String(new_price || '0').replace(/[^0-9.-]+/g, "");
  const priceNum = parseFloat(rawPrice) || 0;
  const itemTotal = priceNum * quantity;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between py-6 border-b border-[#26658C]/20 gap-4">
      <div className="flex items-center space-x-4 w-full sm:w-2/5">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 object-cover rounded-lg border border-[#54ACBF]/20 bg-[#A7EBF2]/10"
        />
        <div>
          <h3 className="text-sm font-bold text-[#011C40] line-clamp-1">{name}</h3>
          <p className="text-sm text-[#26658C] mt-1">{new_price}</p>
        </div>
      </div>

      <div className="flex items-center border border-[#26658C]/40 rounded-lg">
        <button
          onClick={() => updateCartItemCount(quantity - 1, id)}
          className="px-3 py-1 text-[#011C40] font-bold hover:bg-[#A7EBF2]/30 transition-colors"
        >
          -
        </button>
        <span className="px-4 py-1 text-sm font-medium text-[#011C40]">{quantity}</span>
        <button
          onClick={() => updateCartItemCount(quantity + 1, id)}
          className="px-3 py-1 text-[#011C40] font-bold hover:bg-[#A7EBF2]/30 transition-colors"
        >
          +
        </button>
      </div>

      <div className="text-sm font-bold text-[#023859] w-24 text-right">
        ${itemTotal.toFixed(2)}
      </div>

      <button
        onClick={() => removeFromCart(id)}
        className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
      >
        Remove
      </button>
    </div>
  );
};

export default Cartitem;