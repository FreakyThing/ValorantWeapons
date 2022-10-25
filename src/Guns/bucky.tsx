import React, { MouseEvent } from 'react'
import classicpic from "./classic.svg"
import classicShooting from "./classicShooting.png"
import human  from "./human.svg"

const TargetDiv = document.getElementById("div1");
const btnalt = document.getElementById("togalt");
const TargetDiv2 = document.getElementById("div2");
const btnprim = document.getElementById("togprim");

if(btnalt!= null){
btnalt.onclick = function onClick(){
 
  if(TargetDiv?.style.display !== "none"){
    if(TargetDiv?.style.display != null){
    TargetDiv.style.display = "none";
    }
  }else{}

  if(TargetDiv2?.style.display === "none"){
    if(TargetDiv2?.style.display != null){   
      TargetDiv2.style.display = "block"
    }
  }else{}

}
};



if(btnprim!= null){
btnprim.onclick = function onClick(){
  if(TargetDiv2?.style.display !== "none"){
    if(TargetDiv2?.style.display != null){
    TargetDiv2.style.display = "none";
    }
  }else{
  }


if(TargetDiv?.style.display === "none"){
  if(TargetDiv?.style.display != null){
    TargetDiv.style.display = "block"
  }else{
    
  }
}
}
};

function Bucky(){
  
  
  return (
    <div className='min-h-screen bg-gradient-to-b from-black via-slate-800 to-slate-500'>
    
    <div className="p-10 max-w-sm mx-auto bg-white rounded-xl 
    shadow-lg flex items-center space-x-4">
    
      <div className="shrink-0">
        <img className='object-contain h-13 w-12' 
        src={classicpic} alt="Classic Icon" />    
      </div>
    
      <div>
        <div className="text-xl font-medium text-slate-500">Classic</div>
        <p className="text-slate-500">FREE</p>
      </div>
    
    </div>
    
    <div className="absolute top-40 right-20 p-10 w-1/3 h-4/6
    mx-auto bg-white rounded-xl shadow-lg bg-slate-600 flex items-center space-x-4">
    
    <div className='absolute top-10 left-10 text-slate-600 bg-black shadow-lg rounded-xl p-6'>
     0-30M
      <p className='text-white'>Head: 78</p>
      <p className='text-white'>Body: 26</p>
      <p className='text-white'>Legs: 26</p> 
      </div> 


    
  

    <div className='absolute top-10 right-10 bg-black text-slate-600 shadow-lg rounded-xl p-6'>
     30-50M
      <p className='text-white'>Head: 66</p>
      <p className='text-white'>Body: 22</p>
      <p className='text-white'>Legs: 18</p> 
      </div> 

      <div className="absolute top-48 right-5 left-5 py-12 px-12 bg-slate-800 rounded-xl items-center"> 
      
      <p className='absolute top-3 left-3 text-slate-600 text-left '> Primary </p>
      
      <p className='absolute  top-8 left-3 text-white'> Fire Mode </p>
      <p className='absolute  top-8 right-3 text-white font-bold'> Semi-Auto </p>
      <p className='absolute  top-12 left-3 text-white'> Fire rate </p>
      <p className='absolute  top-12 right-3 text-white font-bold'> 6.75 rounds/sec </p>

      </div>

  

      <div className="absolute bottom-auto bottom-1/4 right-5 left-5 py-12 px-12 bg-slate-800 rounded-xl items-center"> 
      
      <p className='absolute top-3 left-3 text-slate-600 text-left '> Secondary </p>
      
      <p className='absolute  top-8 left-3 text-white'> Fire Mode </p>
      <p className='absolute  top-8 right-3 text-white font-bold'> 3-Round Burst, spread increase</p>
      <p className='absolute  top-12 left-3 text-white'> Fire rate </p>
      <p className='absolute  top-12 right-3 text-white font-bold'> 2.22 rounds/sec</p>

    

      </div>

      <div className="absolute bottom-5 right-5 left-5 py-12 px-12 bg-slate-600 rounded-xl items-center"> 
            
      <p className='absolute  top-8 left-3 text-white'> Magazine Capacity </p>
      <p className='absolute  top-8 right-3 text-white font-bold'> 12 </p>
      <p className='absolute  top-12 left-3 text-white'> Wall Penetration </p>
      <p className='absolute  top-12 right-3 text-white font-bold'> Low </p>

      </div>

      
    </div>

    <div className="absolute top-40 left-20 bg-slate-600 p-10 w-3/6 h-4/6 
    mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">

      <img className='absolute top-0 inset-x-0 left-0 right-0 rounded-xl items-center'
      src={classicShooting} alt= "Classic Shooting" />

      <button id='togprim' className="absolute left-3 bottom-20 py-3 px-5 
      shadow-md no-underline rounded-full bg-black text-white 
      font-sans font-semibold transition duration-150 ease-in-out text-sm border-blue btn-primary 
      hover:text-white hover:bg-slate-800 focus:outline-none 
      active:shadow-none mr-2">Primary Fire</button>
      
      <button id='togalt'  className="absolute left-3 bottom-3 py-3 px-5 
      shadow-md no-underline rounded-full bg-black text-white 
      font-sans font-semibold text-sm border-blue btn-primary 
      hover:text-white hover:bg-slate-800 focus:outline-none 
      active:shadow-none mr-2">Alternate Fire</button>

      <div id="div1" className="absolute bottom-3 right-3 py-8 px-12 
      bg-slate-800 rounded-xl text-slate-600 text-left items-center"> Classic
        <p className='p-2 text-white'> Semi-automatic </p>
        <p className='p-2 text-white'> Fire-rate: 6.75 rounds/sec</p>
      </div>

      <div id="div2" className="absolute bottom-3 right-3 py-8 px-12 
      bg-slate-800 rounded-xl text-slate-600 text-left items-center"> Classic
        <p className='p-2 text-white'> Burst fire </p>
        <p className='p-2 text-white'> 3 bullets/click</p> 
      </div> 
 
    </div>
  
    </div>

  )
}

export default Bucky