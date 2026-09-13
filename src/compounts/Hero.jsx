import Mobiles from '../imgss/Mobile.png';
 
export default function Hero() { 
     


    return (
        <section >
            <div className=" flex flex-row relative  ">
                <img src={Mobiles} alt="img" />
                <div className=" flex  flex-col justify-center absolute right-60 top-52 border-b-4  border-blue-300   "  >
                    
                    <h1 className=" font-black gap-y-2  text-4xl  hover:text-white/65  " > Best shop for mobile phone </h1>
                </div>
                <div  className="flex  flex-col justify-center absolute right-24 top-60  w-1/2 " >
                    <p  className= " font-mono my-5 font-extralight hover:text-white/60  "  >  The world of smartphones is now right at your fingertips!
We bring you the latest releases, comprehensive comparisons, and expert reviews to help you choose the perfect phone for your needs and budget.
Stay ahead with up-to-date prices, exclusive deals, and everything new in the world of technology. </p>
                  </div>
               
                
            </div>
            

        </section>
            


    );



}