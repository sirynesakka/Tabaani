"use client"
import axios from "axios";
import { RiDeleteBin5Line } from "react-icons/ri";
import React , { useState, useEffect }  from "react";
import Deletecomment  from "../../components/deleteComment"

const GestComm = () =>{
    const [comment, setComment] = useState([]);

    const fetchComment = async () => {
      try {
        const response = await axios.get("/api1/adminCom");
        setComment(response.data.comments);
      } catch (error) {
        console.error("Error", error);
      }
    };
  
    useEffect(() => {
      fetchComment();
    }, []);

    return(
        <>
        <div className="ml-4 lg:ml-60 mt-10 text-green-900 justify-center text-center text-4xl font-semibold font-serif">
       Gestion des Avis
     </div>
     <div className="flex ml-4 lg:ml-60 mt-10 justify-center items-center h-full">
       <div className="overflow-x-auto">
         <table className="min-w-full divide-y divide-gray-200">
         <thead>
             <tr>
               <th className="p-3 font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                 userEmail
               </th>
               <th className="p-3 font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                 Commentaire
               </th>
               <th className="p-3 font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                 Rate
               </th>
               <th className="p-3 font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                 Action
               </th>
             </tr>
           </thead>
           <tbody>
           {comment.map((comment) => (
                 <tr key={comment.id} className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                 <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                   <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-serif uppercase">
                     userEmail
                   </span>
                   {comment.useremail}
                 </td>
                 <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                   <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-semibold uppercase">
                     Commentaire
                   </span>
             {comment.comment }
                 </td>
                 <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                   <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-semibold uppercase">
                     Rating
                   </span>
             {comment.rating }
                 </td>

                   <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                     <button 
                       
                       className="text-red-500"
                     > <Deletecomment id={comment._id} setComment={setComment}/>
                       
                     </button>
                   </td>
                 </tr>
               ))}
           </tbody>
         </table>
       </div>
       </div>
     </>

    )
}
export default GestComm;