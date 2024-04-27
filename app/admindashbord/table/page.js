
"use client"
import React, {useState,useEffect} from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "axios";



const Table = () => {
    const [user , setUser] = useState([]);

  
    const fetchUser = async () => {
        try {
            const response = await axios.get("/api1/callback");
            console.log(response.data.users)
            setUser(response.data.users);
        } catch (error) {
            console.error("Error", error);
        }
    }

    useEffect(() => {
        fetchUser(); 
    }, []); 

    const handleDelete = async (id) => {
        try {
          await axios.delete(`/api1/callback?id=${id}`);
          console.log("Data Deleted successfully!");
          fetchUser(); // Refetch data after deletion
        } catch (error) {
          console.error("Error deleting:", error);
        }
      };
 

    return (
        <>
         <div className="ml-4 lg:ml-60 mt-10 text-green-900 justify-center text-center text-4xl font-semibold font-serif">
        Gestion des Profiles
      </div>
      <div className="flex ml-4 lg:ml-60 mt-10 justify-center items-center h-full">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
          <thead>
              <tr>
                <th className="p-3 font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                  Email
                </th>
                <th className="p-3 font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                  Role
                </th>
                <th className="p-3 font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {user
                // Filter out users without a role
                .filter((user) => user.selectedRole)
                .map((user) => (
                  <tr key={user.id} className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-serif uppercase">
                      Nom
                    </span>
                    {user.email}
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-semibold uppercase">
                      Email
                    </span>
              {user.selectedRole}
                  </td>

                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="text-red-500"
                      >
                        <RiDeleteBin5Line size={25} />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        </div>
      </>
    );
        
        
    
}
export default Table; 