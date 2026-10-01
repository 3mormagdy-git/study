import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useShop } from '../context/Shop-context';
import { useAuth } from '../context/AuthContext';
import Cartitem from './Cartitem';
import { ProductsData } from '../compounts/ProductData';

const Cart = ({ allProducts = ProductsData }) => {
  const { cartItems, getTotalCartAmount, clearCart } = useShop();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const subtotal = getTotalCartAmount(allProducts);
  const shipping = subtotal > 0 ? 10.00 : 0.00;
  const grandTotal = subtotal + shipping;

  const hasItems = Object.values(cartItems).some((qty) => qty > 0);

  const handleCheckoutSubmit = (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    setIsCheckingOut(false);
    setCheckoutComplete(true);
    clearCart(); // تفريغ السلة الخاصة بالمستخدم الحالي فقط
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-[#011C40] mb-8">عربة التسوق</h1>

      {checkoutComplete ? (
        <div className="bg-[#A7EBF2]/20 border border-[#54ACBF] p-8 rounded-xl text-center space-y-4">
          <h2 className="text-2xl font-bold text-[#011C40]">تم إتمام الطلب بنجاح! 🎉</h2>
          <p className="text-[#26658C]">شكراً لتسوقك معنا، {user?.firstName || user?.name || 'عميلنا العزيز'}. جاري معالجة طلبك.</p>
          <button
            onClick={() => {
              setCheckoutComplete(false);
              navigate('/');
            }}
            className="bg-[#023859] hover:bg-[#54ACBF] text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            متابعة التسوق
          </button>
        </div>
      ) : !hasItems ? (
        <div className="text-center py-16 bg-gray-50 rounded-xl border border-dashed border-[#26658C]/30">
          <p className="text-lg text-[#26658C] mb-4">عربة التسوق فارغة حالياً.</p>
          <Link
            to="/"
            className="inline-block bg-[#023859] hover:bg-[#54ACBF] text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            ابدأ التسوق
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#54ACBF]/20">
            <div className="divide-y divide-gray-200">
              {allProducts.map((product) => {
                const qty = cartItems[product.id];
                if (qty > 0) {
                  return (
                    <Cartitem
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      image={product.img}
                      new_price={product.price}
                      quantity={qty}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-[#54ACBF]/20 h-fit space-y-6">
            <h2 className="text-xl font-bold text-[#011C40] pb-4 border-b border-gray-200">ملخص الطلب</h2>
            
            <div className="space-y-3 text-sm text-[#26658C]">
              <div className="flex justify-between">
                <span>المجموع الفرعي</span>
                <span className="font-semibold text-[#011C40]">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>تكلفة الشحن</span>
                <span className="font-semibold text-[#011C40]">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-3 text-base font-bold text-[#011C40]">
                <span>الإجمالي الكلي</span>
                <span className="text-[#023859]">${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsCheckingOut(true)}
              className="w-full bg-[#023859] hover:bg-[#54ACBF] text-white font-medium py-3 rounded-lg transition-colors shadow-md cursor-pointer"
            >
              إتمام الشراء
            </button>
          </div>
        </div>
      )}

      {/* نموذج المودال الخاص بإدخال بيانات الشحن وتأكيد الطلب */}
      {isCheckingOut && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl border border-[#54ACBF]/30 space-y-6">
            <h3 className="text-xl font-bold text-[#011C40]">تفاصيل الشحن وإتمام الطلب</h3>
            
            <form onSubmit={handleCheckoutSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#011C40] mb-1">الاسم الكامل</label>
                <input
                  type="text"
                  required
                  defaultValue={user?.name || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#54ACBF] focus:border-[#54ACBF] text-sm text-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#011C40] mb-1">عنوان الشحن</label>
                <input
                  type="text"
                  required
                  placeholder="مثال: شارع رئيسي، المدينة"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#54ACBF] focus:border-[#54ACBF] text-sm text-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#011C40] mb-1">رقم الهاتف</label>
                <input
                  type="tel"
                  required
                  defaultValue={user?.phone || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#54ACBF] focus:border-[#54ACBF] text-sm text-gray-800"
                />
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsCheckingOut(false)}
                  className="w-1/2 bg-gray-200 hover:bg-gray-300 text-[#011C40] font-medium py-2 rounded-lg transition-colors"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-[#023859] hover:bg-[#54ACBF] text-white font-medium py-2 rounded-lg transition-colors"
                >
                  تأكيد الطلب
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;