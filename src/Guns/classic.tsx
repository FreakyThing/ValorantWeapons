import React, { MouseEvent } from 'react'
import classicpic from "./classic.svg"
import classicShooting from "./classicShooting.png"
import classicShooting2  from "./classicShooting2.png"
import arrow from "./arrow.svg"
import bkg from "./bkg.png"

const TargetDiv = document.getElementById("div1");
const btnalt = document.getElementById("togalt");
const TargetDiv2 = document.getElementById("div2");
const btnprim = document.getElementById("togprim");
const btnpic2 = document.getElementById("togimg2");
const pic1 = document.getElementById("img1");
const pic2 = document.getElementById("img2");

if(btnpic2 != null){
  btnpic2.onclick = function onClick(){
    if(pic1 != null && pic2 != null){
    if(pic1?.style.display === "block"){
      pic1.style.display = 'none'
      pic2.style.display = 'block'
    }else{
      pic2.style.display = 'none'
      pic1.style.display = 'block'

    }
  }
  }
}

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

function Classic(){
  
  
  return (
    <div className='min-h-screen bg-slate-900'>

    
    
    <div className="p-6 max-w-sm mx-auto bg-cyan-800 rounded-xl 
    shadow-lg flex items-center space-x-4">
    
      <div className="shrink-0">
        <img className='object-contain h-13 w-12' 
        src={classicpic} alt="Classic Icon" />    
      </div>
    
      <div>
        <div className="text-xl font-medium flex text-white">Classic</div>
        <p className="text-white">FREE</p>
      </div>
    
    </div>
    
    <div className="absolute top-40 right-20 p-10 w-1/3 h-4/6
    mx-auto bg-cyan-800 rounded-xl shadow-lg bg-slate-600 flex items-center space-x-4">
    
    <div className='absolute top-10 left-10 text-slate-600 bg-slate-900 shadow-lg rounded-xl p-6'>
     0-30M
      <p className='text-white'>Head: 78</p>
      <p className='text-white'>Body: 26</p>
      <p className='text-white'>Legs: 26</p> 
      </div> 


    
  

    <div className='absolute top-10 right-10 bg-slate-900 text-slate-600 shadow-lg rounded-xl p-6'>
     30-50M
      <p className='text-white'>Head: 66</p>
      <p className='text-white'>Body: 22</p>
      <p className='text-white'>Legs: 18</p> 
      </div> 

      <div className="absolute top-48 right-5 left-5 py-12 px-12 bg-slate-800 outline outline-offset-2 outline-2 rounded-xl items-center"> 
      
      <p className='absolute top-3 left-3 text-slate-600 text-left '> Primary </p>
      
      <p className='absolute  top-8 left-3 text-white'> Fire Mode </p>
      <p className='absolute  top-8 right-3 text-white font-bold'> Semi-Auto </p>
      <p className='absolute  top-12 left-3 text-white'> Fire rate </p>
      <p className='absolute  top-12 right-3 text-white font-bold'> 6.75 rounds/sec </p>

      </div>

  

      <div className="absolute bottom-auto bottom-1/4 right-5 left-5 py-12 px-12 bg-slate-800 outline outline-offset-2 outline-2 rounded-xl items-center"> 
      
      <p className='absolute top-3 left-3 text-slate-600 text-left '> Secondary </p>
      
      <p className='absolute  top-8 left-3 text-white'> Fire Mode </p>
      <p className='absolute  top-8 right-3 text-white font-bold'> 3-Round Burst, spread increase</p>
      <p className='absolute  top-12 left-3 text-white'> Fire rate </p>
      <p className='absolute  top-12 right-3 text-white font-bold'> 2.22 rounds/sec</p>

    

      </div>

      <div className="absolute bottom-5 right-5 left-5 py-12 px-12 bg-slate-800 rounded-xl outline outline-offset-2 outline-2 items-center"> 
            
      <p className='absolute  top-8 left-3 text-white'> Magazine Capacity </p>
      <p className='absolute  top-8 right-3 text-white font-bold'> 12 </p>
      <p className='absolute  top-12 left-3 text-white'> Wall Penetration </p>
      <p className='absolute  top-12 right-3 text-white font-bold'> Low </p>

      </div>

      
    </div>

    <div className="group absolute top-40 left-20 bg-slate-600 p-10 w-3/6 h-4/6 
    mx-auto bg-cyan-800 rounded-xl shadow-lg flex items-center space-x-4">

      

      <img id='img1' className='absolute top-0 inset-x-0 left-0 right-0 rounded-xl items-center'
      src={classicShooting} alt= "Classic Shooting" />
      <img id = 'img2' className='absolute top-0 inset-x-0 display:none -left-4 right-0  rounded-xl items-center'
      src={classicShooting2} alt= "Classic Shooting 2" />
     


      <button id='togimg2' className="absolute right-0 top-10 outline outline-offset-2 outline-2 group [transform:translateZ(0)] 
              px-3 py-3 rounded-xl text-black bg-inherit invisible group-hover:visible overflow-hidden 
              relative before:absolute before:bg-slate-900 before:bottom-0 before:left-0 before:h-full before:w-full before:-translate-x-full 
              hover:before:translate-x-0 before:transition before:ease-in-out before:duration-500">
            <span className="relative z-0 text-white group-hover:text-white transition ease-in-out duration-500"/>
            <div className="shrink-0">
        <img className='object-contain h-3 w-3' 
        src={arrow} alt="Arrow" />    
      </div>
       </button>

      <button id='togprim' className="absolute left-3 top-40 p-6 outline outline-offset-2 outline-2 group [transform:translateZ(0)] 
              px-6 py-3 rounded-xl text-black bg-slate-400 overflow-hidden 
              relative before:absolute before:bg-slate-900 before:bottom-0 before:left-0 before:h-full before:w-full before:-translate-x-full 
              hover:before:translate-x-0 before:transition before:ease-in-out before:duration-500">
            <span className="relative z-0 text-white group-hover:text-white transition ease-in-out duration-500"/>
        Primary Fire  
      </button>
      
      <button id='togalt' className="absolute left-3 top-40 p-6 outline outline-offset-2 outline-2 group [transform:translateZ(0)] 
          px-6 py-3 rounded-xl bg-slate-400 overflow-hidden relative before:absolute before:bg-slate-900 
          before:bottom-0 before:left-0 before:h-full before:w-full before:-translate-x-full 
          hover:before:translate-x-0 before:transition before:ease-in-out before:duration-500">
        <span className="relative z-0 text-white group-hover:text-white transition ease-in-out duration-500" />
        Alternate Fire
      </button>

      <div id="div1" className="absolute bottom-3 right-3 py-8 px-12 
      bg-slate-800 rounded-xl text-slate-600 text-left items-center"> Classic
        <p className='p-2 text-white'> Semi-automatic </p>
        <p className='p-2 text-white'> Fire-rate: 6.75 rounds/sec</p>
      </div>

      <div id="div2" className="absolute bottom-3 right-3 py-8 px-12 
      bg-slate-800 rounded-xl text-slate-600 text-left display: none items-center"> Classic
        <p className='p-2 text-white'> Burst fire </p>
        <p className='p-2 text-white'> Bullets: 3 bullets/click</p> 
      </div> 
 
    </div>
  
    </div>

  )
}

export default Classic