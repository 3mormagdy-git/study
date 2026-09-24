
import { useNavigate } from 'react-router-dom';
import { ProductsData } from './ProductData';


 export default function ProdcutCard() {
     const navegate = useNavigate();
    


     return (
         <section className="   " id="Product">
             
             <div className=" text-4xl font-extrabold text-center py-2 px-8 border-b border-gray-600  rounded-sm  ">
                 <h2 >Product</h2>
                 <div class="w-24 h-1mx-auto mb-0 gap-80"></div>
             </div>
             {/* cad for product */}
             <div className="mt-5  grid grid-cols-3 gap-x-3 gap-y-5 ml-28 "   >
                 {ProductsData.slice(0,9).map((item) => (
                 
                     <div kay={item.id} className=" bg-gray-600/25 border border-slate-200 rounded-xl p-5 w-72 shadow-sm hover:shadow-md transition flex flex-col items-center "  >
                         <img src={item.img} alt="phone" className="w-48 h-48 " />
                         <div className=" text-md space-y-1 text-[#070707]">
                             <h2>{item.name}</h2>
                             <h3>{item.ram}</h3>
                             <h3>{item.storag}</h3>
                             <h3>{item.cpu}</h3>
                             <h3 className='text-red-600 '>{item.price}</h3>
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
         </section>
     );
}




