
import React from "react";
import { useNavigate } from "react-router-dom";
import { ProductsData } from "./ProductData";
 export default function Best() {
     const navegate = useNavigate();

     return (
         <div className="  px-5 max-w-7xl mx-auto mb-8 ">
             <div className=" text-4xl  font-extrabold text-center py-8  rounded-sm  border-b-2 border-gray-600  ">
                 <h2>Best Seller</h2>
                 <div className="w-24 h-1 mx-auto mb-0 gap-80"></div>
             </div>
             {/* product item   */}
             <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-6">
                 {ProductsData.slice(0, 3).map((item) => (
                  <div kay={item.id} className=" bg-gray-600/25 border border-slate-200 rounded-xl p-5 w-72 shadow-sm hover:shadow-md transition flex flex-col items-center "  >
                  <img src={item.img} alt="phone" className="w-48 h-48 " />
                  <div className=" text-sm space-y-1 text-[#000000]">
                      <h2>{item.name}</h2>
                      <h3>{item.ram}</h3>
                      <h3>{item.storag}</h3>
                      <h3>{item.cpu}</h3>
                      <h3>{item.price}</h3>
                      <h3>{item.describtion}</h3>
                  </div>
                  <div className="mt-3">
                             <button onClick={() => navegate(`/product/${item.id}`)}
                             className="flex bg-[#3a2f2f] text-white py-1 px-4 rounded-lg cursor-pointer">
                          details
                      </button>
                  </div>
              </div>
                 ))}

             </div>

         </div>
     );
     
 }