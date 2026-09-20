import Logo from '../imgss/Logoo.png';
import {  useNavigate } from 'react-router-dom';
export default function NavBar() {
    


    
    const navigate = useNavigate();
    const navigate1 = useNavigate();
    function handel1() {
        navigate("Signin")
    };
    function   handel2 () {
        navigate1 ("Signup")
    }
    


    return (

        
        <>
            <nav className=" flex flex-row  gap-6 justify-center relative h-16 bg-gray-600/25"   >
                <img src={Logo} alt="logo" className="  w-16  absolute left-7 h-14 " />
                <div className="my-6 flex flex-row  gap-6 absolute left-16 ml-10 ">
                    <h3 className=" hover:text-cyan-300" >Home</h3>
                    <h3 className=" hover:text-cyan-300" >prodcut</h3>
                    <h3 className=" hover:text-cyan-300" >services</h3>
                </div>
                <input type="search" name="search" id="" placeholder="search  " className=" w-1/2 rounded-xl h-10 my-3 justify-center  px-36 " />
                <div className="flex flex-row  gap-5 items-end absolute right-7 ">
                    <button className=" bg-gray-200/50 w-28 h-10 rounded-xl my-3 hover:bg-cyan-300/55    " onClick={handel1}>Sign in </button>
                    <button className=" bg-gray-200/50 w-28 h-10 rounded-xl my-3  hover:bg-cyan-300/55 " onClick={handel2}  >Sign up</button>
                </div>
            </nav>

        </>
    );
    
};

