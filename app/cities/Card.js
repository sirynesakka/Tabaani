import React from "react"; 
import Image from "next/image";
import Link from "next/link";

const Card = () => {
    return (
        <section className="bg-white z-0  dark:bg-gray-900">
        <div className="container z-0 px-6 py-20 mx-auto ">
            <h1 className="w-46 h-2 mb-20 z-0 mt-10 py-5 text-center text-7xl  mx-auto font-serif whitespace-nowrap dark:bg-gray-700 animate-pulse">Asslemaa,</h1>
    
            <p className="w-46 h-2 text-center z-0  mx-auto mb-10 font-serif text-2xl whitespace-nowrap  dark:bg-gray-700 animate-pulse">     Explorez une cuisine exceptionnelle  </p>
            <p className="w-46  h-2  mx-auto mt-4 z-0  text-center  text-2xl sm:w-80 font-serif whitespace-nowrap  dark:bg-gray-700 animate-pulse "> Dans nos restaurants en Tunisie  </p>
    
            <div className="grid grid-cols-1 py-20 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">


               
            <div className="w-full ">
                   <Link href="/mahdia" > 
                  <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600">
                    <Image 
                      src="/mahdia.jpg"
                      alt="mahdia" 
                      class="h-full w-auto"
                      width={600}
                      height={300} /> 
                      </div>
                       </Link>
                    
                    <Link href="/mahdia" className="w-56 h-2 mt-4 dark:bg-gray-700"> 
                    <div className=" mt-5 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-700  dark:bg-gray-700"> Mahdia , Tunisia </div> </Link>
                    <p className="w- h-2 mt- text-gray-400  dark:bg-gray-700"> plus de 30 restaurants</p>
             </div>
    





             <div className="w-full ">
                <Link href="/bizerte" > 
                  <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600">
                    <Image 
                      src="/bizert.jpg"
                      alt="bizerte" 
                      class="h-full w-auto"
                      width={600}
                      height={300} /> 
                      </div>
                       </Link>
                    
                       <Link href="/mahdia" className="w-56 h-2 mt-4 dark:bg-gray-700"> 
                    <div className=" mt-5 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-700  dark:bg-gray-700"> Bizerte , Tunisia </div> </Link>
                    <p className="w- h-2 mt- text-gray-400  dark:bg-gray-700"> plus de 30 restaurants</p>
                </div>


    
                <div className="w-full ">
                  <Link href="/djerba" > 
                  <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600">
                    <Image 
                      src="/djerba.jpg"
                      alt="djerba" 
                      class=" h-64 w-auto"
                      width={600}
                      height={300} /> 
                      </div>
                       </Link>
                    
                       <Link href="/mahdia" className="w-56 h-2 mt-4 dark:bg-gray-700"> 
                    <div className=" mt-5 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-700  dark:bg-gray-700"> Djerba , Tunisia </div> </Link>
                    <p className="w- h-2 mt- text-gray-400  dark:bg-gray-700"> plus de 30 restaurants</p>
                </div>




    
                <div className="w-full ">
                <Link href="/nabeul" > 
                  <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600">
                    <Image 
                      src="/nabeul.jpg"
                      alt="nabeul" 
                      class="h-full w-auto"
                      width={600}
                      height={300} /> 
                      </div>
                       </Link>

                       <Link href="/mahdia" className="w-56 h-2 mt-4 dark:bg-gray-700"> 
                    <div className=" mt-5 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-700  dark:bg-gray-700"> Nabeul, Tunisia </div> </Link>
                    <p className="w- h-2 mt- text-gray-400  dark:bg-gray-700"> plus de 30 restaurants</p>
                </div>





    
                <div className="w-full ">
                <Link href="/mahdia" > 
                  <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600">
                    <Image 
                      src="/sousse.jpg"
                      alt="sousse" 
                      class="h-full w-auto"
                      width={600}
                      height={300} /> 
                      </div>
                       </Link>
                    
                   <Link href="/mahdia" className="w-56 h-2 mt-4 dark:bg-gray-700"> 
                    <div className=" mt-5 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-700  dark:bg-gray-700"> Sousse , Tunisia </div> </Link>
                    <p className="w- h-2 mt- text-gray-400  dark:bg-gray-700"> plus de 30 restaurants</p>
                </div>



    
                <div className="w-full ">
                <Link href="/mahdia" > 
                  <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600">
                    <Image 
                      src="/monestir.jpg"
                      alt="mahdia" 
                      class="h-full w-auto"
                      width={600}
                      height={300} /> 
                      </div>
                       </Link>


                       <Link href="/mahdia" className="w-56 h-2 mt-4 dark:bg-gray-700"> 
                    <div className=" mt-5 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-700  dark:bg-gray-700"> Monestir , Tunisia </div> </Link>
                    <p className="w- h-2 mt- text-gray-400  dark:bg-gray-700"> plus de 30 restaurants</p>
                </div>





    
                <div className="w-full ">
                <Link href="/mahdia" > 
                  <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600">
                    <Image 
                      src="/sfax.jpg"
                      alt="mahdia" 
                      class="h-full w-auto"
                      width={600}
                      height={300} /> 
                      </div>
                       </Link>
                    
                   <Link href="/mahdia" className="w-56 h-2 mt-4 dark:bg-gray-700"> 
                    <div className=" mt-5 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-700  dark:bg-gray-700"> Sfax , Tunisia </div> </Link>
                    <p className="w- h-2 mt- text-gray-400  dark:bg-gray-700"> plus de 30 restaurants</p>
                </div>




    
                <div className="w-full ">
                <Link href="/mahdia" > 
                  <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600">
                    <Image 
                      src="/mahdia.jpg"
                      alt="mahdia" 
                      class="h-full w-auto"
                      width={600}
                      height={300} /> 
                      </div>
                       </Link>

                       <Link href="/mahdia" className="w-56 h-2 mt-4 dark:bg-gray-700"> 
                    <div className=" mt-5 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-700  dark:bg-gray-700"> Hammamet , Tunisia </div> </Link>
                    <p className="w- h-2 mt- text-gray-400  dark:bg-gray-700"> plus de 30 restaurants</p>
                </div>


            </div>
        </div>
    </section>





    )
} 
export default Card; 