import React from "react";
import Image from "next/image";
import Link from "next/link"; 
import Input from "postcss/lib/input";





const Signup = () => { 

   return ( 

        <section class="flex flex-col md:flex-row h-screen items-center">

        <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
              <img src="/f1.jpg" alt="" class="w-full h-full object-cover" />
        </div>

        <div class="bg-white w-full md:max-w-md lg:max-w-full  md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center" />

    <div class="w-full h-100">


      <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

      <form class="mt-6" action="#" method="POST">
        <div>
          <label class="block text-gray-700">Email Address</label>
          <input type="email" name="" id="" placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
        </div>

        <div class="mt-4">
          <label class="block text-gray-700">Password</label>
          <input type="password" name="" id="" placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required />
        </div>

        <div class="text-right mt-2">
          <a href="#" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
        </div>

        <button type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Log In</button>
      </form>

      <div class="my-6 border-gray-300 w-full">

      <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
  <div className="flex items-center justify-center">
    <svg className="w-6 h-6" viewBox="0 0 48 48">
      <path fill="#FBBC05" d="M0 37V11l17 13z"/>
      <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/>
      <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/>
      <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/>
    </svg>
    <span className="ml-4"> Log in with Google</span>
  </div>
</button>

      <p class="mt-8">Need an account? <a href="#" class="text-blue-500 hover:text-blue-700 font-semibold">Create an
              account</a></p>


    </div>
    </div>

   </section> 
   
        
        
  );
}; 
export default Signup;
