import Mobiles from '../imgss/Mobile.png';
 import Mobiles2 from'../imgss/_ (17).jpeg'
export default function Hero() { 
     


    return (
        <section className=' size-96 ' >
            <div className="   py-16 md:py-24 px-6 md:px-12 lg:px-20 rounded-t-3xl mt-8  ">
                <div className='flex flex-row size-72 px-6 mr-52  ' > 
                    <img src={Mobiles2 } alt="vivo" />
                <img className=" mr-52 " src={Mobiles} alt="img" />
                </div>
                <div  >
                    <div className=" flex  flex-col justify-center absolute right-64
                 top-56 border-b-4  border-blue-300 ml-4  "  >
                    
                    <h1 className=" font-black gap-y-2  text-4xl  text   " > Best shop for mobile phone </h1>
                </div>
                <div  className="flex  flex-col justify-center absolute right-24 top-72  w-1/2 " >
                    <p  className= " font-mono my-5 font-light mt-10  "  >  The world of smartphones is now right at your fingertips!
We bring you the latest releases, comprehensive comparisons, and expert reviews to help you choose the perfect phone for your needs and budget.
Stay ahead with up-to-date prices, exclusive deals, and everything new in the world of technology. </p>
                  </div>
               </div>
                
            </div>
            

        </section>
            


    );



}