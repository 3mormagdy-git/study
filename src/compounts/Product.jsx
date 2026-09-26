import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductsData } from './ProductData';
import { ShopContext } from '../context/Shop-context'; 
 export default function ProdcutCard() {
     const navegate = useNavigate();
     const { addToCart, cartItems } = useContext(ShopContext);

    
     return (
         <section className=" p-4  " id="Product">
             
             <div className=" text-4xl font-extrabold text-center py-2 px-8 border-b border-gray-600 rounded-sm  ">
                 <h2 >Product</h2>
                 <div class="w-24 h-1mx-auto mb-0 gap-80"></div>
             </div>
             {/* cad for product */}
             <div className="mt-5  grid grid-cols-1 md:grid-cols-3  gap-5 justify-items-center  "   >
                 {ProductsData.map((item) => {
                     const cartItemAmount = cartItems[item.id]
                     return (
                
                 
                         <div kay={item.id} className=" bg-gray-600/25 border border-slate-200l p-5 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center "  >
                             <img src={item.img} alt="phone" className="w-48 h-48  object-cover rounded-md" />
                             <div className=" text-md space-y-1 text-[#070707]">
                                 <h2>{item.name}</h2>
                                 <h3>{item.ram}</h3>
                                 <h3>{item.storag}</h3>
                                 <h3>{item.cpu}</h3>
                                 <h3 className='text-red-600 '>{item.price}</h3>
                                 <h3>{item.describtion}</h3>
                             </div>
                             <div className="mt-3 flex flex-row gap-3">
                                 <button onClick={() => navegate(`/product/${item.id}`)}
                                     className="flex bg-[#3a2f2f] text-white py-1 px-4 rounded-lg cursor-pointer hover:bg-[#a83737]">
                                     details
                                 </button>
                                 <button onClick={() => { addToCart(Number(item.id)) }} className="addToCartbtn flex bg-[#3a2f2f] text-white py-1 px-4 rounded-lg cursor-pointer">   Add to Cart {cartItemAmount > 0 && `($acartItemAmount)`} </button>
                             </div>
                         </div>
                     );
                 })}
             </div>
         </section>
     );
}

