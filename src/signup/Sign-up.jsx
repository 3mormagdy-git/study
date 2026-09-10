import { useState } from 'react';


export default function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");
    const [submitted, setSubmitted] = useState(false);

function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
}
    return (


<main className="w-screen min-h-screen bg-indigo-950 flex flex-col justify-center items-center  ">
        <div className="  bg-indigo-400  w-96 h-80 flex  flex-col gap-3 rounded-lg shadow-xl px-3 py-2 mx-auto justify-center items-center relative ">
            <h2 className=" gap-2 font-black text-xl  absolute top-1  ">register form </h2>
            {submitted ? (
                <div id="formResponse">
                    <h2> Hi {name}! we have received your register ......</h2>
                </div>
            ) : (
                <form id="registerform" className=" flex flex-col  gap-3 items-center  " onSubmit={handleSubmit}>
                    <input type="text" id="nme" required placeholder="Name"       className=" w-48    rounded-lg bg-indigo-800/50  "    value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" id="mail" required placeholder="Email"   className=" w-48    rounded-lg bg-indigo-800/50  "        value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="coundtry" id="ct" required placeholder="Country"className=" w-48    rounded-lg bg-indigo-800/50  "        value={country} onChange={(e) => setCountry(e.target.value)} />
                    <input type="phone" id="tl" required placeholder="Telphone"  className=" w-48    rounded-lg bg-indigo-800/50  "        value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <button type="submit" id="sUmbitbtn" className=" flex  w-28   border-2  rounded-md bg-indigo-300  pl-9 z-10 " >Send</button> 
                </form>
            )
            }
        </div>
        </main>
    );
    
 }