"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import ChatbotScript from "../components/chatboat";
import Navbar from "../components1/Navbar";
import Aboutus from "../components1/Aboutus";
import MySlider from "../components1/MySlider";
import Temoignages from "../components1/Temoignages";
import Footer from "../components1/Footer";

export default function Client() {
  const router = useRouter();
  const { user, isLoading } = useUser();
  const email = user?.email || "";  

  const checkUserRole = async () => {
    try {
      const response = await axios.get('/api1/checkRole', { params: { email } });
      const role = response.data.role;
      console.log("User role:", role);
      return role;
    } catch (error) {
      console.error("Error fetching user role:", error);
      return null;
    }
  };

  const checkAndModifyUrl = async () => {
    const role = await checkUserRole();
    const currentPath = router.pathname;

    if (role !== "client") {
      console.log("User role is not client. Redirecting to 403.");
      router.replace("/403");
    } else if (currentPath !== "/clientpage") {
      console.log("Current path is incorrect. Redirecting to /clientpage.");
      router.replace("/clientpage");
    }
  };

  useEffect(() => {
    const verifyUserRoleAndUrl = async () => {
      if (!isLoading && user) {
        await checkAndModifyUrl();
      }
    };

    verifyUserRoleAndUrl();
  }, [isLoading, user, router]);

  if (isLoading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ChatbotScript />
      <Navbar hasDashboardclient={true} />
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/16722267/pexels-photo-16722267/free-photo-of-lumineux-ville-restaurant-vacances.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-semibold font-serif leading-tight mb-4">
            Votre Guide Ultime Des Bonnes Adresses
          </h1>
          <a
            href="/clientpage/cities"
            className="bg-green-50 text-gray-900 hover:bg-green-800 py-2 px-6 rounded-full text-lg font-semibold font-serif transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Explorer
          </a>
        </div>
      </div>
      <div>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </div>
      <div>
        <Aboutus />
        <h1 className="py-10 text-3xl font-bold text-center mt-[50px] mb-[50px] underline">
          Les 6 meilleurs restaurants en Tunisie
        </h1>
        <MySlider className="z-1" />
        <Temoignages />
        <Footer />
      </div>
    </div>
  );
}
