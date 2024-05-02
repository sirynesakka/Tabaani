import React from "react";
import Link from "next/link";
import {GiHamburgerMenu} from "react-icons/gi"
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md"; 
import { TfiWrite } from "react-icons/tfi";
import { FaRegComments } from "react-icons/fa";






const Sidebaradmin = () => {

    return ( 
     

      
      <div >

        
        <Disclosure as="nav">
      <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:rind-white group hover:bg-gray-900 ">
        <GiHamburgerMenu className="block md:hidden h-6 w-6 " aria-hidden="true"/> 






      </Disclosure.Button>
       <div className="p-6 w-1/2 h-screen bg-gray-300  z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
        <div className="flex flex-col justify-start item-center">
            <h1 className="text-base text-center cursor-pointer font-semibold font-serif text-green-900 border-b border-gray-100 pb-4 w-full">
            Tableau de bord 
            </h1>
        <div className=" my-4 border-b border-gray-100 pb-4">
          

        <Link href="/admindashbord/table" className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-green-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSpaceDashboard className="text-2xl text-green-900  group-hover:text-white " />
                <h3 className="text-base text-green-900 group-hover:text-white   font-semibold font-serif">
                  Gestion des profiles 
                </h3>
              </Link> 
              </div> 
              <div className=" my-4 border-b border-gray-100 pb-4">
              <Link href="/admindashbord/gestionDemande" className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-green-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <TfiWrite  className="text-2xl text-green-900  group-hover:text-white " />
                <h3 className="text-base text-green-900 group-hover:text-white   font-semibold font-serif">
                  Les Demandes d'ajout 
                </h3>
              </Link>  

              <Link href="/admindashbord/gestion-pub" className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-green-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <TfiWrite  className="text-2xl text-green-900  group-hover:text-white " />
                <h3 className="text-base text-green-900 group-hover:text-white   font-semibold font-serif">
                  Les Publications confirmées
                </h3>
              </Link>  

              <Link href="/admindashbord/gestionComm" className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-green-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <FaRegComments className="text-2xl text-green-900  group-hover:text-white " />
                <h3 className="text-base text-green-900 group-hover:text-white   font-semibold font-serif">
                  Gestion des Avis
                </h3>
              </Link> 
            

              </div> 


               

             
              
              
              
            {/* logout */}
            <div className=" my-4">
            <Link href="/manager" className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-green-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineLogout className="text-2xl text-green-900 group-hover:text-white " />
                <h3 className="text-base text-green-900 group-hover:text-white font-semibold font-serif">
                  Logout
                </h3>
              </Link>
            </div>






        </div>

       </div>

      </Disclosure>


      </div>




     





    )
} 
export default Sidebaradmin;