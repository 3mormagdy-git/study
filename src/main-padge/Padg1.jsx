


export default function Padg1() {
    
    return (

        <main className=" w-screen min-h-screen bg-indigo-950 flexbox flex-col justify-start items-start relative ">
            <div className=" bg-indigo-500/50 w-4/5 h-23 absolute left-60 top-0 z-10 flex justify-center items-center "> 
<h2 className=" text-3xl font-mono font-black hover:text-gray-50 "> My profile </h2>
            </div>
            <div className=" bg-indigo-400  w-60 h-screen flex   flex-col gap-3 rounded-sm shadow-xl px-3 py-2 mx-auto justify-center font-extrabold items-center absolute   " >
                
                <div className=" absolute top-48 left-1 gap-5">
                    <ul> 
                    <li>  cs student</li>
                    <li> front-end develeper</li>
                    <li> powerlifter </li>
                    </ul>
                    <div className="   border-blue-950 my-3 bg-indigo-200 border-solid border-4 hover:border-yellow-200 hover:bg-red-200  rounded-md  px-3 ">
                        <h2 > my socile media</h2>
                           </div>

                    <div className=" flex flex-col gap-2 gap-y-5 text-center ">
                        <a href="https://github.com/3mormagdy-git" className=" border-solid  border-b-2 border-black  hover:border-indigo-200 "> Githup</a>
  <a href="https://www.instagram.com/3mar.magdy575/"               className=" border-solid border-b-2  border-black hover:border-indigo-200">instagram</a>
 <a href="https://www.linkedin.com/in/omar-magdy-ali-569234351/"   className=" border-solid border-b-2  border-black hover:border-indigo-200"> Linked in </a>
<a href="https://qabilah.com/profile/3mormag/posts"                className=" border-solid border-b-2  border-black hover:border-indigo-200"> Qabilah</a>


</div>


                
                </div>
              
               
            </div>
        </main>
    );



}