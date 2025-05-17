
"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";

const Table = () => {
  const router = useRouter();
  const { user: auth0User, isLoading } = useUser();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api1/callback");
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const checkUserRole = async () => {
    try {
      const email = auth0User?.email || "";
      const params = { email };
      const response = await axios.get("/api1/checkRole", { params });
      const role = response.data.role;
      console.log("User role:", role);
      return role;
    } catch (error) {
      console.error("Error fetching user role:", error);
      return null;
    }
  };

  useEffect(() => {
    const verifyUserRole = async () => {
      try {
        if (!isLoading && auth0User) {
          const role = await checkUserRole();
          console.log("role:", role);
          if (role !== "admin") {
            router.replace("/403");
          }
        }
      } catch (error) {
        console.error("Error verifying user role:", error);
      }
    };

    verifyUserRole();
  }, [isLoading, auth0User, router]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api1/callback?id=${id}`);
      console.log("Data Deleted successfully!");
      // Refetch users after deletion
      const response = await axios.get("/api1/callback");
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  if (isLoading || !auth0User) {
    return <div>Loading...</div>;
  }

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
              {users
                // Filter out users without a role
                .filter((user) => user.selectedRole)
                .map((user) => (
                  <tr
                    key={user._id}
                    className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
                  >
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-serif uppercase">
                        Email
                      </span>
                      {user.email}
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-semibold uppercase">
                        Role
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
};

export default Table;
