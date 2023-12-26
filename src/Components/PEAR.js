import React from "react";
import "./LemonStyle.css"
import pear from "../Assats/image 3.png"
import pear2  from "../Assats/image 6.png"
import can3 from "../Assats/can 3.png"

function PEAR(){
    return(
        <div className="bg-[#9BAB7A] h-[600px]"> 
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
                <img alt="Cherry" src={pear} className="blur-[2.2px] w-52 -z-0 absolute right-8 "></img>
                <img alt="Cherry" src={pear2} className="blur-[2.2px] w-52 -z-0 absolute right-36 bottom- "></img>
                <img alt="Cherry" src={pear} className="blur-[2.2px] w-52 -z-0 absolute "></img>
                <img alt="Cherry" src={pear2} className="blur-[2.2px] w-52 -z-0 absolute "></img>
                <img alt="Cherry" src={pear} className="blur-[2.2px] w-52 -z-0 absolute "></img>
                <img alt="Cherry" src={pear2} className="blur-[2.2px] w-52 -z-0 absolute "></img>
            </div>
            <div className="bg-[#9BAB7A] mt-4">
                <h1 className="font-[800] z-30 text-white text-center text-[10.6rem] blur-[2px] tracking-wide ">PEAR</h1>
                <p className="Lemon">PEAR</p>   
                <div>
                <img alt="can" src={can3} className="h-[30rem] relative left-[40.5rem] bottom-56"></img>
            </div> 
            </div>
        </div>
    )
}


export default PEAR