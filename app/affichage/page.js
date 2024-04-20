import React from "react";
import Navbar from "../components1/Navbar";
import Footer from "../components1/Footer";
import Modal from "../reservationForm/page"

const Affichage = () => {
  return (
    <>
      <div class="max-w-screen-xl mx-auto">

        <header className="z-10">
          <Navbar/>
       </header>


        <main class="mt-10">
        <div className="font-bold text-xl mb-2">Titre</div>
          <div class="block md:flex md:space-x-2 px-2 lg:p-0">
            
            <a
              class="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block"
              style={{ height: '24em' }}
              href="#"
            >
              <div class="absolute left-0 bottom-0 w-full h-full z-10"
                style={{ backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))' }}></div>
              <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" class="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" />
              </a>

            <div class="w-full md:w-1/3 relative rounded">
              Map
              </div>
          </div>

     <div class="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">

     <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <div className="px-8 py-4">
  <div className="font-bold mt-10 px-8  underline text-xl mb-2">Description de l'endroit</div>
  <p className="text-gray-700 px-8 text-base">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
    
    <div className="font-bold mt-10 underline text-xl mb-2">Review</div>
  </div>
  <div className=" px-5 flex items-center">
  <div class="flex justify-center items-center">
  <div class="flex items-center mt-2 mb-4">
    <svg class="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
    <svg class="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
    <svg class="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
    <svg class="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
    <svg class="mx-1 w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
  </div>
</div>
    <span className="ml-3  text-gray-600 text-sm">34 reviews</span>
  </div>
</div>



    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold underline text-xl mb-2">Les Détailles</div>
        <div className=" mt-4 text-gray-700 font-bold text-base">
          Cuisine 
        </div>
        <p className="text-gray-700 text-base">
      Tunisienne
        </p>

        <div className="mt-4 text-gray-700 font-bold text-base">
        Le repas proposé par cet endroit
        </div>
        <p className="text-gray-700 text-base">
          Diner
    </p>
        <div className=" mt-4 text-gray-700 font-bold text-base">
        La spécialité de cet endroit
        </div>
        <p className="text-gray-700 text-base">
         Pizza
        </p>
        <div className=" mt-4 text-gray-700 font-bold text-base">
           Le prix
        </div>
        <p className="text-gray-700 text-base">
         Pas cher
    </p>
        <div className="mt-4 text-gray-700 font-bold text-base">
           Cet endroit est bon pour 
        </div>
        <p className="text-gray-700 text-base">
         famille
         </p>
      </div>
      
      <div class="border border-dotted"></div>
      <div  className="font-bold mt-9 px-6  underline text-xl mb-2">
      Pour plus de détails, veuillez contacter le 58927359
      </div>
     </div>

            <div class="w-full lg:w-1/3 px-3">

            <div class="mb-4">
    <h5 class="font-bold text-lg uppercase text-gray-700 px-1 mb-2">Pour réserver</h5>
    <div class="flex z-10 justify-center mt-11">
        <div class="px-24 "> <Modal/> </div>
    </div>
</div>



              <div class="border border-dotted"></div>


             


              <div class="border border-dotted"></div>

            </div>

          </div>
        </main>

        
        <footer class="border-t mt-32 pt-12 pb-32 px-4 lg:px-0">
          <Footer/>
        </footer>
      </div>
    </>
  )
}
export default Affichage;
