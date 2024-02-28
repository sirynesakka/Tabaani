import React from "react";

const Ajouterplace = () => {
    return ( <form>
        <div class="bg-indigo-50 min-h-screen md:px-20 pt-6">
          <div class=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
            <h1 class="text-center text-2xl font-bold text-gray-500 mb-10">Ajouter une place</h1>
            <div class="space-y-4">
              <div>
                <label for="title" class="text-lx font-serif">Nom:</label>
                <input type="text" placeholder="title" id="title" class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
              </div>



              <div>
                <label for="description" class="block mb-2 text-lg font-serif">Quelle catégorie décrit le mieux cet endroit:</label>
                <button class="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-blue-400  py-2 px-4 border border-blue hover:border-transparent rounded mr-2">
		            Restaurant 
		         </button>
                 <button class="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-blue-400   py-2 px-4 border border-blue hover:border-transparent rounded mr-2">
		          café
		        </button>
              </div>





              <div>
                <label for="name" class="text-lx font-serif">Addresse:</label>
                <input type="text" placeholder="name" id="name" class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
              </div>
              <div>
                <label for="email" class="text-lx font-serif">ville:</label>
                <input type="text" placeholder="name" id="email" class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
              </div>
              <button class=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">ADD POST</button>
            </div>
          </div>
        </div>
      </form>







    )
}
export default Ajouterplace;