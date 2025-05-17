'use client'
import * as React from 'react';
import Reservation from '../../components/mesreservations';
import Navbar from '../../components1/Navbar';
import Footer from '../../components1/Footer';
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import {  useEffect } from "react";
export default function RecipeReviewCard() {
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
    return (
        <>
           
            <Navbar hasDashboardclient={true} /> 
           
            <div className="mb-8 flex-1">
                <Reservation />
            </div>
            <Footer/>
            </>
       
    );
}
