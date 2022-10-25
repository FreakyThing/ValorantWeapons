import { Outlet, Link } from "react-router-dom";
import jett from "./jett.png"

function Layout() {
  
  
    return (


        <div className="min-h-screen min-w-screen bg-gradient-to-b from-black via-slate-800 to-slate-500 space-x-4 space-y-4">   
    
        
        <div className="group">
          <button className="absolute left-4 p-6 group [transform:translateZ(0)] px-6 py-3 rounded-xl bg-slate-800 overflow-hidden 
            relative before:absolute before:bg-slate-900 before:bottom-0 before:left-0 before:h-full before:w-full before:-translate-x-full 
            hover:before:translate-x-0 before:transition before:ease-in-out before:duration-500">
            <span className="relative z-0 text-white group-hover:text-slate-800 transition ease-in-out duration-500">
            <Link to="/classic">Pistols</Link>
            </span>
          </button>
          
          <div className="invisible group-hover:visible text-white bg-inherit flex space-x-4 space-y-4 p-6"> 
            <div className="bg-white text-black rounded-xl items-center p-2"> Classic </div>
            <div className="bg-white text-black rounded-xl items-center p-2"> Shorty </div>
            <div className="bg-white text-black rounded-xl items-center p-2"> Frenzy </div>
            <div className="bg-white text-black rounded-xl items-center p-2"> Ghost </div>
            <div className="bg-white text-black rounded-xl items-center p-2"> Sheriff </div>
          </div>
          </div>
          
          <div className="group">
          <button className="p-6 group [transform:translateZ(0)] px-6 py-3 rounded-xl bg-slate-800 overflow-hidden 
            relative before:absolute before:bg-slate-900 before:bottom-0 before:left-0 before:h-full before:w-full before:-translate-x-full 
            hover:before:translate-x-0 before:transition before:ease-in-out before:duration-500">
            <span className="relative z-0 text-white group-hover:text-slate-800 transition ease-in-out duration-500">
            <Link to="/classic">Light</Link>
            </span>
          </button>

          <div className="invisible group-hover:visible text-white bg-inherit flex space-x-4 space-y-4 p-6"> 
            <div className="bg-white text-black rounded-xl items-center p-2"> Spectre </div>
            <div className="bg-white text-black rounded-xl items-center p-2"> Bucky </div>
            <div className="bg-white text-black rounded-xl items-center p-2"> Judge </div>
            <div className="bg-white text-black rounded-xl items-center p-2"> Stinger </div>
          </div>  

        </div>

          <div className="group">   
          <button className="p-6 group [transform:translateZ(0)] px-6 py-3 rounded-xl bg-slate-800 overflow-hidden 
            relative before:absolute before:bg-slate-900 before:bottom-0 before:left-0 before:h-full before:w-full before:-translate-x-full 
            hover:before:translate-x-0 before:transition before:ease-in-out before:duration-500">
            <span className="relative z-0 text-white group-hover:text-slate-800 transition ease-in-out duration-500">
            <Link to="/classic">Rifles</Link>
            </span>
          </button>

          <div className="invisible group-hover:visible text-white bg-inherit flex space-x-4 space-y-4 p-6"> 
            <div className="bg-white text-black rounded-xl items-center p-2"> Bulldog </div>
            <div className="bg-white text-black rounded-xl items-center p-2"> Guardian </div>
            <div className="bg-white text-black rounded-xl items-center p-2"> Vandal </div>
            <div className="bg-white text-black rounded-xl items-center p-2"> Phantom </div>
          </div>
          </div>
          
          <div className="group">
          <button className="p-6 group [transform:translateZ(0)] px-6 py-3 rounded-xl bg-slate-800 overflow-hidden 
            relative before:absolute before:bg-slate-900 before:bottom-0 before:left-0 before:h-full before:w-full before:-translate-x-full 
            hover:before:translate-x-0 before:transition before:ease-in-out before:duration-500">
            <span className="relative z-0 text-white group-hover:text-slate-800 transition ease-in-out duration-500">
            <Link to="/classic">Heavy</Link>
            </span>
          </button>
          <div className="invisible group-hover:visible text-white bg-inherit flex space-x-4 space-y-4 p-6"> 
            <div className="bg-white text-black rounded-xl items-center p-2"> Marshal </div>
            <div className="bg-white text-black rounded-xl items-center p-2"> Operator</div>
            <div className="bg-white text-black rounded-xl items-center p-2"> Ares </div>
            <div className="bg-white text-black rounded-xl items-center p-2"> Odin </div>
          </div>
          </div>
          
            

          
    </div>
  )
};

export default Layout;