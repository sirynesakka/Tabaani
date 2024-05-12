"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";

const Visiter = () => {
  const [comments, setComment] = useState([]);
 
  const Owneremail = localStorage.getItem('Demandes');
  console.log("email est s :", Owneremail)
const fetchComment = async () => {
    try {
      console.log("Owneremail:", Owneremail);
      const response = await axios.get('/api1/ownerCom', {
        params: {
            Owneremail: Owneremail// Replace 'example@example.com' with the actual email
        }
    });setComment(response.data.comments);
    console.log("data of ow are :", response.data.Comments);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetchComment();
  }, []);

 


  return (
    <>
      <div className="ml-4 lg:ml-60 mt-10 text-green-900 justify-center text-center text-4xl font-semibold font-serif">
        Visiter les Comments
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
                  Commentaires
                </th>
                <th className="p-3 font-serif uppercase bg-white-200 text-green-900 border border-gray-300 hidden lg:table-cell">
                  Rate
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {comments && comments.map((Comment) => (
                <tr
                  key={Comment.id}
                  className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
                >
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-serif uppercase">
                      Email
                    </span>
                     <div className="font-semibold">{Comment.useremail}</div>
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-serif uppercase">
                      Commentaires
                    </span>
                    <div className="font-semibold">{Comment.comment}</div>
                  </td>

                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-serif uppercase">
                      Rate
                    </span>
                    <span className="rounded  py-1 px-3 text-xs font-bold">
                     <div className=" font-semibold"> {Comment.rating}</div>
                    </span>
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

export default Visiter;
