// import Bg from "../imgss/Bg.jpeg"
// import Phone1 from "../imgss/infinix.jpeg"
import { Link } from "react-router-dom";
import Phone2 from "../imgss/Mobile.png"
export default function Hero() {
    return (
        <section className=" h-56 w-full flex flex-row bg-gray-600/25 border-b-4 border-gray-600 ">
            <div className="  flex  justify-start m-4 " >
                <img src={Phone2} className=" w-56 h-48 px-6 py-3  "  alt="d" />
            </div>
            <div className=" flex justify-center items-center px-16">
                <div>
                                    <h1 className="font-black text-4xl">
                    Start your journey
                    </h1>                    
                </div>
                <div>
                    <button   > </button>
                </div>
            </div>



        </section>




    );
}