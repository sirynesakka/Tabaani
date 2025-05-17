'use client'
import React from "react";
import Head from 'next/head';
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import  {  useEffect } from "react";
import axios from "axios";

const Ownerpage = () => {
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
            if (role !== "manager") { // Compare role with "admin"
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
  
  const Owneremail = user?.email || "";
  localStorage.setItem('Demandes', Owneremail);
    return (
        <div className="mx-auto max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
            <Head>
                <style>{`
                    .purple_border {
                        box-shadow: 2px 2px 1px rgb(100, 30, 100);
                    }
                `}</style>
            </Head>
            <div className="mb-5 mt-16 mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64">
                <div className="purple_border font-serif font-semibold text-center p-6 border border-black">
                    <p className="mb-3"> Bienvenue dans votre espace Manager ! </p>
                    <p className="mb-3">Un lieu conçu pour vous permettre de gérer efficacement vos tâches et vos responsabilités</p>
                    <p> Si vous avez des questions, n'hésitez pas à nous contacter.</p>
                </div>
            </div>
        </div>
    );
};

export default Ownerpage;
