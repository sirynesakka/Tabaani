"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";

import Logo from "../../public/Logo.png";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { useState } from "react"; 
import {auth}   from "../firebase"; 
import {signInWithPopup,GoogleAuthProvider} from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth"






const Navbar =() => {
  const [menuIcon, setIcon] = useState(false);
  const [header, setHeader] = useState(false);
  

  const handleNav = () => {
    setIcon(!menuIcon);}
  
   



    
  const scollHeader = () => {
    if(window.scrollY >= 20){
      setHeader(true)
    }else {
       setHeader(false)
    }
} 
   useEffect(()=>{
     window.addEventListener('scroll',scollHeader) 
     return ()=>{ 
              window.addEventListener('scroll',scollHeader) 

     }

   },[])
  
  
  
  return (
    <nav className={header ? "z-10 fixed w-full bg-red-50 " : " bg-red-50"}>
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16 md:text-2xl xl:text-3xl z-50">
        <Image 
        src="/Logo.png"
         alt="logo" 
         width={100}
          height={60} />

        <div>
        <ul className="hidden md:flex text-2xl lg:text-[20px]">
            <Link href="/home">
              <div className="ml-2 font-bold  lg:mr-2 mr-4 px-8 py-1 text-blue-800 hover:text-[#659be2]  ">
                Accueil
              </div>
            </Link>
            <Link href="/Destination">
              <div className="ml-2 rounded-full lg:mr-2 font-bold  mr-4 px-8 py-1  text-blue-800 hover:text-[#659be2] ">
                Destination
              </div>
            </Link>
            <Link href="/Review">
              <div className="ml-2 rounded-full lg:mr-2 px-8 py-1 font-bold  mr-4  text-blue-800 hover:text-[#659be2]">
                Review
              </div>
            </Link>
            <Link href="/Contact">
              <div className="ml-2 lg:mr-2 rounded-full font-bold px-8 py-1 mr-4  text-blue-800 hover:text-[#659be2]">
                contact
              </div>
            </Link> 
            <div>
                 <Link href="/Login" onClick={handleNav} > 
                      <button onClick={handleNav }  className=" border-2 border-blue-800  ml-10 lg:mr-2 px-8 py-1 rounded-full font-bold  mr-10  text-blue-800 hover:text-[#659be2] ">Login</button>
                 </Link> 
            
             </div>

             <div> 
                   <Link href="/Signup" onClick={handleNav} > 
                      <button className=" border-2 border-blue-800  ml-10 lg:mr-2 px-8 py-1 rounded-full font-bold  mr-10  text-blue-800 hover:text-[#659be2]">Sign up</button>
                   </Link>

                </div>
                
         </ul>
          
        </div>

        <div onClick={handleNav} className="flex md:hidden">
          {menuIcon ? (
            <IoIosClose size={25} className="text-[#659be2] " />
          ) : (
            <IoIosMenu size={25} className="text-[#659be2]" />
          )}
        </div>
        <div
          className={
            menuIcon
              ? "md:hidden absolute top-[100px] right-0 left-0 bottom-0 flex justify-center items-center w-full h-screen text-center bg-slate-800 text-gray-300 ease-in duration-300"
              : "md:hidden absolute top-[100px] right-0 left-[100%] flex justify-center items-center w-full h-screen text-center bg-slate-800 text-gray-300 ease-in duration-300"
          }> 
          <div className="w-full">
            <ul className="font-blod text-2xl">

                <li onClick={handleNav} className="py-5 hover:text-[#659be2] cursor-pointer">
                  <Link href="/Accuil">Accuil</Link>
                </li>
                
                <li onClick={handleNav} className="py-5 hover:text-[#659be2] cursor-pointer">
                  <Link href="/Accuil">Destination</Link>
                </li> 

                <li onClick={handleNav} className="py-5 hover:text-[#659be2] cursor-pointer">
                  <Link href="/Accuil">Review</Link>
                </li>

                <li onClick={handleNav} className="py-5 hover:text-[#659be2] cursor-pointer">
                  <Link href="/Accuil">Contact</Link>
                </li>

                </ul> 

                <div >  
                      <Link href="/Login" onClick={handleNav} > 
                      <button onClick={handleNav }  className="border-2 border-white  text-slate rounded-full font-bold py-3 w-[250px] mb-5 hover:text-[#659be2] ">Login</button>
                      </Link>
                      
                </div>

                <div> 
                   <Link href="/Signup" onClick={handleNav} > 
                      <button className="border-2 border-white  text-slate  rounded-full font-bold py-3 w-[250px] mb-5 hover:text-[#659be2] ">Signup</button>
                   </Link>

                </div>

          </div>
         </div>
      </div>
    </nav>
  );
}
export default Navbar;