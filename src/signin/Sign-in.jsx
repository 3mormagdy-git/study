import { useState } from "react";
import Pro from '../imgss/Pro.jpg';

import { useNavigate } from 'react-router-dom';

export default function Signin() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const navigate1 = useNavigate();


   function handelchang1(e){
        setName(e.target.value);
    };
    function handelchang2(e) {
        setPassword(e.target.value);
    }
    function clicked() {
        if (name==="omar" && password==="1234" ) {
              navigate1("/padge")
         alert("welcome Omar")
        }
        else {
            alert("big error ")
            
        };
    }
    function clicked1() {
        navigate("/signup")
    };

    return (
        <main className="w-screen min-h-screen bg-indigo-950 flex flex-col justify-center items-center">
    
        <div className=" bg-indigo-400 mx-auto my-14 p-3 flex flex-col w-3/4 h-96 rounded-md shadow-lg justify-center gap-2 relative ">
 
    

            <div className="" >
                <img src={Pro}alt=" loading" srcset="" className=" w-  h-96  absolute  top-0 right-0  border-8 border-indigo-200"  />
            </div>

            < h1 className=" text-xl  font-black text-start m-0 absolute top-2  ">Welcome to my page </h1>
          
            <p className=" absolute top-14  font-light text-white/50  w-9/12 gap-4">  Welcome back! We've missed you.
                Sign in to pick up right where you left off. </p>
          
            <div>
                <div className=" flex flex-col gap-2 ">
            <label htmlFor="User Name"className= " font-bold  " > User Name </label>
                <input type="text" required className="n w-36  rounded-lg bg-indigo-800/50 " onChange={handelchang1} value={name}  placeholder="Name" />
                <input type="password" required value={password} onChange={handelchang2} placeholder="password" className="N w-36  rounded-lg bg-indigo-800/50 p-1" />
                </div>
            </div>
            <div>
                <div className=" flex flex-col  text-left gap-1 ">
                <button onClick={clicked} className=" flex border-2  w-28 rounded-md bg-indigo-300 pl-7 h z-10 " >Sign in</button>
                <button  className=" flex  w-28   border-2  rounded-md bg-indigo-300  pl-7 z-10" onClick={clicked1} >  sign up </button>
                    </div>
                
            </div>
    </div>
 </main>

    );



}