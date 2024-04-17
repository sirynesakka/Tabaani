"use client"
import React, { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { CgSandClock } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuSettings } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const Aside1 = () => {
  // State to manage visibility of aside on small screens
  const [showAside, setShowAside] = useState(false);

  return (
    <>
     
      <div
        className="block sm:hidden cursor-pointer"
        onClick={() => setShowAside(!showAside)}
      >
       <GiHamburgerMenu />
      </div>

      {/* Aside content */}
      <div
        className={`${
          showAside ? "block" : "hidden"
        } sm:flex sm:flex-col items-center w-16 h-screen py-8 space-y-8 bg-white dark:bg-gray-900 dark:border-gray-700`}
      >
        <a href="#">
          <img src="logo.png" alt="" />
        </a>

        <Link
          href="/demande"
          className="p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
        >
          <CgSandClock className="w-10 h-7 sm:w-6 sm:h-6" />
        </Link>

        <Link
          href="/reservation"
          className="p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
        >
          <IoIosCheckmarkCircle className="w-10 h-7 sm:w-6 sm:h-6 " />
        </Link>

        <Link
          href="#"
          className="p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
        >
          <GrFavorite className="w-10 h-7 sm:w-6 sm:h-6 " />
        </Link>

        <Link
          href="#"
          className="p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
        >
          <LuSettings className="w-10 h-7 sm:w-6 sm:h-6 " />
        </Link>
      </div>
    </>
  );
};

export default Aside1;
