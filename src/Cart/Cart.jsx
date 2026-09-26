import React, { useContext } from "react";
import { ProductsData } from "../compounts/ProductData";
import { ShopContext } from "../context/Shop-context";
import Cartitem from "../cart/Cartitem";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-5 text-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart Items</h1>
      
      <div className="flex flex-col">
        {ProductsData.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <Cartitem key={product.id} data={product} />;
          }
          return null;
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="mt-8 text-center space-y-4">
          <p className="text-2xl font-bold">Subtotal: {totalAmount} EGP</p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => navigate("/")} 
              className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-lg font-bold cursor-pointer"
            >
              Continue Shopping
            </button>
            <button className="bg-cyan-600 hover:bg-cyan-500 px-6 py-2 rounded-lg font-bold cursor-pointer">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center mt-10 space-y-4">
          <h2 className="text-2xl font-semibold">Your Cart is Empty</h2>
          <button 
            onClick={() => navigate("/")} 
            className="bg-cyan-600 hover:bg-cyan-500 px-6 py-2 rounded-lg font-bold cursor-pointer"
          >
            Goooooo
          </button>
        </div>
      )}
    </div>
  );
}