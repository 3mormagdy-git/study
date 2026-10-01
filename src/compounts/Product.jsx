import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/Shop-context';
import { useAuth } from '../context/AuthContext';
import { ProductsData } from '../compounts/ProductData'; // استيراد بيانات المنتجات مباشرة

const Product = () => {
  const { addToCart } = useShop();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = (id) => {
    if (!isLoggedIn) {
      navigate('/signin');
      return;
    }
    addToCart(id);
  };

  return (
    <section className="py-12 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-[#011C40]"> All product</h2>
        <p className="mt-2 text-sm text-[#26658C]">
          Discover new collection
        </p>
      </div>

      {!ProductsData || ProductsData.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p>There are no product yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ProductsData.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden border border-[#54ACBF]/20 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <Link to={`/product/${item.id}`} className="overflow-hidden bg-[#A7EBF2]/20 block relative pt-[100%]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </Link>
              
              <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                  <Link to={`/product/${item.id}`}>
                    <h3 className="text-sm font-semibold text-[#011C40] hover:text-[#54ACBF] line-clamp-2 mb-2">
                      {item.name}
                    </h3>
                  </Link>
                  
                  <p className="text-xs text-gray-500 mb-2 line-clamp-1">{item.describtion}</p>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-lg font-bold text-[#023859]">${item.price}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Link
                    to={`/product/${item.id}`}
                    className="w-full bg-[#26658C] hover:bg-[#54ACBF] text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center text-center"
                  >
                    Details
                  </Link>

                  <button
                    onClick={() => handleAddToCart(item.id)}
                    className="w-full bg-[#023859] hover:bg-[#011C40] text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Add to cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Product;