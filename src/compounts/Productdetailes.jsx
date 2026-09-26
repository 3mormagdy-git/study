
import React from "react";
import { useState,useEffect,useContext } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { ProductsData } from "./ProductData";
import { ShopContext } from "../context/Shop-context";
export default function ProductDetails({}) {
/// calls shpoContext and id 
  const { id } = useParams();
  const navegate = useNavigate();
  const { addTOCart, cartItems } = useContext(ShopContext);
  const prodcut = ProductsData.find((p) => (p.id === parseInt(id)));
////
  const [isUserlogin, setisUserlogin] = useState("");
  useEffect(() => {
    const signin = localStorage.getItem("islogged in");
    if (signin === 'true') {
      setisUserlogin(true);
     }
  }, [])
  const handleclick = () => {
    const loggedIn = localStorage.getItem('isloggedin');
    if (loggedIn === 'true') {
      const userToken = localStorage.getItem('userToken');
      alert('succefully login');
    } else {
      alert('please signin')
      navegate('/Signin')
     };
    
   }

  if (!prodcut) { 
    return <h2 className = "text-center text-white mt-10  "> product not found </h2>
  }
  const cartItemAmount =cartItems[prodcut.id]

  return (
    <section className=" py12 px4\ max-w-4xl mx-auto text-white ">
      <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-600/50 p-6 rounded-xl">
        <img src={prodcut.img} alt={prodcut.name} className="w-64 h-64 object-cover" />
        
        <div className="space-y-3">
          <h1 className="text-3xl font-bold">{prodcut.name}</h1>
          <h2 className="text-xl text-red-400">{prodcut.price}</h2>
          <p className="text-gray-500"> {prodcut.ram}</p>
          <p className="text-gray-500"> {prodcut.cpu}</p>
          <p className="text-gray-600 mt-4">{prodcut.describtion}</p>
          <div className="grid grid-rows-1 grid-cols-1 gap-x-6"></div>
          <button className="bg-black px-6 py-2 rounded-lg font-bold mt-4  " onClick={handleclick}>
            Buy Now
          </button>
          <button className="bg-black px-6 py-2 rounded-lg font-bold mt-4 " onClick={()=>addTOCart(prodcut.id)}> Add To Cart {cartItemAmount>0&&`(${cartItemAmount})`} </button>
        </div>
      </div>
</section>
  )



}