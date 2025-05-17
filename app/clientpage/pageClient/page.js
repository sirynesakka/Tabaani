'use client'// Test.js
import React, { useState } from "react";
import Aside2 from "../../components/aside2";
import Aside3 from "../../components/aside3";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import {  useEffect } from "react";
const Test = () => {
  const router = useRouter();
    const {  isLoading } = useUser();
    const { user } = useUser();
    const email = user?.email || "";
  
    const checkUserRole = async () => {
      try {
        const params = {email}
        const response = await axios.get('/api1/checkRole', { params }); // Pass email as params
        const role = response.data.role;
        console.log("User** role:", role);
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
            console.log("role**:", role);
            if (role !== "client") { // Compare role with "admin"
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
  const [options, setOptions] = useState({});
  const handleOptionsChange = (options) => {
    setOptions(options);
  };


  return (
    <div className="h-screen overflow-y-auto">
      <div className="flex flex-col sm:flex-row">
        <div className="">
          <Aside2 onOptionsChange={setOptions} handleOptionsChange={handleOptionsChange} />
        </div>
        <div >
          <Aside3 options={options} />
        </div>
      </div>
    </div>
  );
};

export default Test;
