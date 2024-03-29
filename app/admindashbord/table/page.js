
"use client"
import React, {useState,useEffect} from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "axios";



const Table = () => {
    const [user , setUser] = useState([]);

    useEffect(() => {
        fetchUser(); 
    }, []);
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
 

    
     

    return (
        <>

        <div className="container mx-auto overflow-x-auto ">
            <table className="w-full mt-16 table-auto ">
                <thead>
                    <tr className="bg-gray-800 text-white">
                        <th className="px-6 py-3 ">ID</th>
                        <th className="px-6 py-3">Email</th>
                        <th className="px-6 py-3">Role</th>
                        <th className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                {user.filter((user, index, self) => 
            user.selectedRole && self.findIndex(u => u.selectedRole === user.selectedRole) === index
        ).map(user => (
            <tbody key={user.id} className="bg-gray-200">
                <tr className="text-center">
                    <td className="px-6 py-4">{user.id}</td>
                    <td className="px-6 py-4">{user.name}</td>
                    <td className="px-6 py-4">{user.selectedRole}</td>
                    <td className="px-6 py-4">
                        <button className="text-red-500">
                            <RiDeleteBin5Line size={25} />
                        </button>
                    </td>
                </tr>
            </tbody>
        ))}
            </table>
        </div>
        
        </>
        
        
    )
}
export default Table; 