import React from "react";
import "./LemonStyle.css"
import Lemon from "../Assats/FRESH LEMON 7.png"
import Lemon8 from "../Assats/LEMON 8.png"
import can from "../Assats/can.png"

function Lemon1(){
    return(
        <div className="bg-[#ced05d] h-[800px]"> 
            <div className="flex p-6 pt-12 pl-28 gap-80" >
                <div>
                    <h2 className="text-green-700 text-2xl Times font-clashdisplay font-bold tracking-wide">Frutiy</h2>
                </div> 
                <div className="flex gap-10 font-bold text-lg">
                    <a>Shope</a>
                    <a>About Us</a>
                    <a>Careers</a>
                    <a>Partnership</a>
                    <a>Contact</a>
                </div>
                <div className="flex gap-2 font-bold">
                    <button className="p-1">Login</button>
                    <button>|&nbsp; Sign Up</button>
                </div>
                
            </div>
            <div>
            <img alt="lemon" src={Lemon} className="blur-[2px] h-[300px] z-0 absolute right-44 top-[-5rem]  rotate-[150deg]" ></img>
                <img alt="lemon" src={Lemon} className="blur-[2px] h-[350px] z-0 absolute transform -scale-x-100 left-[-5rem] top-5 " ></img>
                <img alt="lemon" src={Lemon} className="blur-[2px] h-[300px] z-0 absolute right-44 bottom-11 rotate-[345deg]" ></img>
                <img alt="lemon" src={Lemon} className="blur-[2px] h-[240px] z-0 absolute left-[10rem] top-[34rem] rotate-180" ></img>
                <img alt="lemon slice" src={Lemon8} className="blur-[2.2px] h-[480px] -z-0 absolute left-[20rem] top-40" ></img>
            </div>
            <div className="bg-[#ced05ded] mt-4">
                <h1 className="font-[800]  text-white text-center text-[10.6rem] blur-[2px] tracking-wide ">LEMON</h1>
                <p className="Lemon">LEMON</p>   
                <div>
                
            </div> 
            </div>
            <img alt="can" src={can} className="h-[30rem] relative left-[40.5rem] bottom-56"></img>       
        </div>
    )
}


export default Lemon1