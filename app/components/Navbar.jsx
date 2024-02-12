import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import Logo from '../../public/Logo.png';

const Navbar = () => {
    return (
        <nav className="fixed w-full h-24 shadow-xl bg-white"> 
           <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16"> 
           <Link href="/"> 
             <Image
             scr="../../public/Logo.png"
             alt="logo"
             width={205}
             height={75}
             className="IMAGE"
             priority
             /> 
            </Link>
            


            <div>
               <ul className="hidden sm:flex"> 
                 <Link href="/home">
                     <div className="ml-10  font-bold  rounded-full mr-4    text-green-800 ">Accueil</div>
                 </Link>
                 <Link href="/Destination">
                     <div className="ml-10 rounded-full font-bold  mr-4   text-green-800 ">Destination</div>
                 </Link>
                 <Link href="/Review">
                     <div className="ml-10 rounded-full  font-bold  mr-4  text-green-800 ">Review</div>
                 </Link>
                 <Link href="/Contact">
                     <div className="ml-10 rounded-full font-bold  mr-4  text-green-800 ">contact</div>
                 </Link>

               </ul>
            </div>
           </div>
        </nav>

    ); 
};
export default Navbar ;