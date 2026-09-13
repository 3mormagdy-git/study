import Nothing from '../imgss/Nothing.jpeg'



export default function  Best ( ) {
    
   
    return (
        <div className=" py-12 px-4 max-w-7xl mx-auto" >
            <div class="w-24 h-1mx-auto mt-2 "></div>
            <div className=" text-4xl font-extrabold text-center py-2 px-8 border-2 border-gray-600/5 bg-gray-600/25 rounded-xl shadow-sm " >
                <h2 className="  " >Best prices</h2>
                
            </div>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-3 justify-items-center mt-6"  >
                {Array.from({length:3}).map((_,index) =>(
                <div className="bg-gray-600/25  border border-slate-200 rounded-xl p-5 w-72 shadow-sm hover:shadow-md transition gap-6  " >
                    <img src={Nothing} alt="nothing-phone" className=" w-48 h-48 " />
                    <div className="text-sm space-y-1 text-cyan-700">
                        <h2> nothing phone 1  </h2>
                        <h3>256gb, 12ram
                            Snapdragon 778G+ 5G  </h3>
                        <h3>12,000 EGP  </h3>
                    </div>
                    </div>
                    ) )};
            </div>
            food 
            
            
        </div>

   
    );
    
}