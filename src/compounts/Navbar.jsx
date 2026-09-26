
import { useNavigate, Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import React, { useContext } from 'react';
import { ShopContext } from '../context/Shop-context';



export default function NavBar() {
    const navigate = useNavigate();
    const navigate1 = useNavigate();
    const { getTotalCartItems } = useContext(ShopContext);
    const totalItems = getTotalCartItems();
    function handel1() {
        navigate("Signin")
    };
    function   handel2 () {
        navigate1 ("Signup")
    };
 
    return (
        <nav className=" flex flex-row  gap-6 justify-center relative h-16  border-b-4 border-gray-600  scroll scroll-smooth   "   >
            
            <div>
                <h1>Mobile Shop
                 </h1>
           </div>
           
            <div className="my-6 flex flex-row  gap-6 absolute left-16 ml-10 ">
                <a href="#Home" className=" hover:text-cyan-300" > Home </a>
                <a href="#Product" className=" hover:text-cyan-300" > prodcut </a>
                <a href="#Servics" className=" hover:text-cyan-300" >services</a>
                <Link to="/Cart" className='relative' > <ShoppingCart size={32} /> {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full items-center justify-center">
                        {totalItems}
                    </span>
                )}</Link>
            </div>
            <input type="search" name="search" id="" placeholder="search  " className=" w-1/2 rounded-xl h-10 my-3 justify-center  px-36 bg-gray-200/50 " />
            <div className="flex flex-row  gap-5 items-end absolute right-7 ">
                <button className=" bg-gray-200/50 w-28 h-10 rounded-xl my-3 hover:bg-cyan-300/55    " onClick={handel1}>Sign in </button>
            </div>
        </nav>
    );
}