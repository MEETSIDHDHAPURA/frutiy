import React from "react";
import "./LemonStyle.css"
import Cherry from "../Assats/C-1 (1).png"
import Cherry2 from "../Assats/C-1 (2).png"
import Cherry3 from "../Assats/C-1 (3).png"
import can2 from "../Assats/can 2.png"

function CHERRY1(){
    return(
        <div className="bg-[#F5B6D1] h-[800px]"> 
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
                <img alt="Cherry" src={Cherry} className="blur-[2.2px] w-52 -z-0 absolute "></img>
                <img alt="Cherry" src={Cherry2} className="blur-[2.2px] w-52 -z-0 absolute "></img>
                <img alt="Cherry" src={Cherry3} className="blur-[2.2px] w-52 -z-0 absolute "></img>
                <img alt="Cherry" src={Cherry} className="blur-[2.2px] w-52 -z-0 absolute "></img>
                <img alt="Cherry" src={Cherry} className="blur-[2.2px] w-52 -z-0 absolute "></img>
                <img alt="Cherry" src={Cherry2} className="blur-[2.2px] w-52 -z-0 absolute "></img>
            </div>
            <div className="bg-[#F5B6D1] mt-4">
                <h1 className="font-[800] z-30 text-white text-center text-[10.6rem] blur-[2px] tracking-wide ">CHERRY</h1>
                <p className="Lemon">CHERRY</p>   
                <div>
                <img alt="can" src={can2} className="h-[30rem] relative left-[40.5rem] bottom-56"></img>
            </div> 
            </div>
        </div>
    )
}


export default CHERRY1