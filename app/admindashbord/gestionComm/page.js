"use client"
import axios from "axios";
import { RiDeleteBin5Line } from "react-icons/ri";
import React , { useState, useEffect }  from "react";
import Deletecomment  from "../../components/deleteComment"
import { useRouter } from "next/navigation"; // Corrected import
import { useUser } from "@auth0/nextjs-auth0/client";

const GestComm = () => {
  const [comments, setComments] = useState([]);
  const router = useRouter();
  
  const { isLoading, user } = useUser();
  const email = user?.email || "";

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const response = await axios.get("/api1/adminCom");
        setComments(response.data.comments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComment();
  }, []); // Dependency array is empty, so it runs once on component mount

  const checkUserRole = async () => {
    try {
      const params = { email };
      const response = await axios.get('/api1/checkRole', { params }); // Pass email as params
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
        if (!isLoading && user) {
          const role = await checkUserRole();
          console.log("role:", role);
          if (role !== "admin") { // Compare role with "admin"
            router.replace("/403"); // Redirect to 403 page if user is not admin
          }
        }
      } catch (error) {
        console.error("Error verifying user role:", error);
      }
    };

    verifyUserRole();
  }, [isLoading, user, router]);

  if (isLoading || !user) {
    return <div>Loading...</div>;
  }

  return (
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
                  User Email
                </th>
                <th className="p-3 font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                  Commentaire
                </th>
                <th className="p-3 font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                  Rating
                </th>
                <th className="p-3 font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {comments.map((comment) => (
                <tr key={comment._id} className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-serif uppercase">
                      User Email
                    </span>
                    {comment.useremail}
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-semibold uppercase">
                      Commentaire
                    </span>
                    {comment.comment}
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-semibold uppercase">
                      Rating
                    </span>
                    {comment.rating}
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <Deletecomment id={comment._id} setComments={setComments} />
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

export default GestComm;
