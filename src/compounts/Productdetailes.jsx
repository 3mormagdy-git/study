import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useShop } from '../context/Shop-context';
import { useAuth } from '../context/AuthContext';
import { ProductsData } from '../compounts/ProductData'; 
const Productdetailes = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useShop();
  const { isLoggedIn } = useAuth();
  const [quantity, setQuantity] = useState(1);

  // البحث عن المنتج المطابق للـ id
  const product = ProductsData.find((p) => String(p.id) === String(productId));

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-[#011C40] mb-4">المنتج غير موجود</h2>
        <button
          onClick={() => navigate('/')}
          className="bg-[#023859] text-white px-4 py-2 rounded-md hover:bg-[#54ACBF] transition-colors"
        >
          العودة للرئيسية
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      navigate('/signin');
      return;
    }
    for (let i = 0; i < quantity; i++) {
      addToCart(product.id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* صورة المنتج */}
        <div className="bg-[#A7EBF2]/20 rounded-2xl overflow-hidden shadow-lg border border-[#54ACBF]/20 flex items-center justify-center p-6">
          <img
            src={product.img}
            alt={product.name}
            className="max-h-[450px] object-cover rounded-xl"
          />
        </div>

        {/* تفاصيل المنتج */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl font-extrabold text-[#011C40]">{product.name}</h1>
          
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-[#023859]">${product.price}</span>
          </div>

          <p className="text-[#26658C] leading-relaxed">
            {product.describtion}
          </p>

          <div className="grid grid-cols-3 gap-4 bg-[#A7EBF2]/10 p-4 rounded-lg border border-[#54ACBF]/20 text-center">
            <div>
              <span className="block text-xs text-gray-500">ram (RAM)</span>
              <span className="font-bold text-[#011C40]">{product.ram} GB</span>
            </div>
            <div>
              <span className="block text-xs text-gray-500">CPU (CPU)</span>
              <span className="font-bold text-[#011C40]">{product.cpu}</span>
            </div>
            <div>
              <span className="block text-xs text-gray-500">التخزين</span>
              <span className="font-bold text-[#011C40]">{product.storag}</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
            <div className="flex items-center border border-[#26658C]/40 rounded-lg">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 text-[#011C40] font-bold hover:bg-[#A7EBF2]/30"
              >
                -
              </button>
              <span className="px-4 py-1 text-sm font-medium text-[#011C40]">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 text-[#011C40] font-bold hover:bg-[#A7EBF2]/30"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex-grow bg-[#023859] hover:bg-[#54ACBF] text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
            >
Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetailes;