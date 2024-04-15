'use client'
import React, {useEffect,useState} from "react"; 
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Card = () => {
  const [clickedImageAlt, setClickedImageAlt] = useState(null);

  useEffect(() => {
    const storedAlt = localStorage.getItem("clickedImageAlt");
    if (storedAlt) {
      setClickedImageAlt(storedAlt);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("clickedImageAlt", clickedImageAlt);
  }, [clickedImageAlt]);

  const handleImageClick = (alt) => {
    setClickedImageAlt(alt);
    localStorage.setItem("clickedImageAlt", alt);
    console.log(`Image cliquée: ${alt}`);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setClickedImageAlt(null);
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

    return (
        <section className="bg-white z-0  dark:bg-gray-900">
        <div className="container z-0 px-6 py-20 mx-auto ">
            <h1 className="w-46 h-2 mb-20 z-0 mt-10 py-5 text-center text-7xl  mx-auto font-serif whitespace-nowrap dark:bg-gray-700 animate-pulse">Asslemaa,</h1>
    
            <p className="w-46 h-2 text-center z-0  mx-auto mb-10 font-serif text-2xl whitespace-nowrap  dark:bg-gray-700 animate-pulse">     Explorez une cuisine exceptionnelle  </p>
            <p className="w-46  h-2  mx-auto mt-4 z-0  text-center  text-2xl sm:w-80 font-serif whitespace-nowrap  dark:bg-gray-700 animate-pulse "> Dans nos restaurants en Tunisie  </p>
    
            <div className="grid grid-cols-1 py-20 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">


               
            <div className="w-full ">
                   <Link href="/pageClient" > 
                  <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"
                  onClick={() => handleImageClick("Mahdia")}>
                    <Image 
                      src="/mahdia.jpg"
                      alt="Mahdia" 
                      class="h-full w-auto"
                      width={600}
                      height={300} /> 
                      </div>
                       </Link>
                    
                    <div href="/test" className="w-56 h-2 mt-4 dark:bg-gray-700"> 
                    <div className=" mt-5 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-700  dark:bg-gray-700"> Mahdia , Tunisia </div> </div>
                    <p className="w- h-2 mt-2 text-gray-400  dark:bg-gray-700"> plus de 30 restaurants</p>
             </div>
    





             <div className="w-full ">
                <Link href="/pageClient" > 
                  <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"
                  onClick={() => handleImageClick("Bizerte")}>
                    <Image 
                      src="/bizert.jpg"
                      alt="Bizerte" 
                      class="h-full w-auto"
                      width={600}
                      height={300} /> 
                      </div>
                       </Link>
                    
                       <div  className="w-56 h-2 mt-4 dark:bg-gray-700"> 
                    <div className=" mt-5 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-700  dark:bg-gray-700"> Bizerte , Tunisia </div> </div>
                  <div className=" h-2 mt-2 text-gray-400  dark:bg-gray-700"> plus de 30 restaurants </div> 
                </div>


    
                <div className="w-full ">
                  <Link href="/pageClient" > 
                  <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"
                  onClick={() => handleImageClick("Médenine")}>
                    <Image 
                      src="/djerba.jpg"
                      alt="Médenine" 
                      class=" h-64 w-auto"
                      width={600}
                      height={300} /> 
                      </div>
                       </Link>
                    
                       <div className="w-56 h-2 mt-4 dark:bg-gray-700"> 
                    <div className=" mt-5 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-700  dark:bg-gray-700"> Médenine, Tunisia </div> </div>
                    <p className="w- h-2 mt-2 text-gray-400  dark:bg-gray-700"> plus de 30 restaurants</p>
                </div>




    
                <div className="w-full ">
                <Link href="/pageClient" > 
                  <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"
                   onClick={() => handleImageClick("Nabeul")}>
                    
                    <Image 
                      src="/nabeul.jpg"
                      alt="Nabeul" 
                      class="h-full w-auto"
                      width={600}
                      height={300} /> 
                      </div>
                       </Link>

                       <div className="w-56 h-2 mt-4 dark:bg-gray-700"> 
                    <div className=" mt-5 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-700  dark:bg-gray-700"> Nabeul, Tunisia </div> </div>
                    <p className="w- h-2 mt-2 text-gray-400  dark:bg-gray-700"> plus de 30 restaurants</p>
                </div>





    
                <div className="w-full ">
                <Link href="/pageClient" > 
                  <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"
                   onClick={() => handleImageClick("Sousse")}>
                    <Image 
                      src="/sousse.jpg"
                      alt="Sousse" 
                      class="h-full w-auto"
                      width={600}
                      height={300} /> 
                      </div>
                       </Link>
                    
                   <div  className="w-56 h-2 mt-4 dark:bg-gray-700"> 
                    <div className=" mt-5 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-700  dark:bg-gray-700">Sousse, Tunisia </div> </div>
                    <p className="w- h-2 mt-2 text-gray-400  dark:bg-gray-700"> plus de 30 restaurants</p>
                </div>



    
                <div className="w-full ">
                <Link href="/pageClient" > 
                  <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"
                  onClick={() => handleImageClick("Monastir")}>
                    <Image 
                      src="/monestir.jpg"
                      alt="Monastir" 
                      class="h-full w-auto"
                      width={600}
                      height={300} /> 
                      </div>
                       </Link>


                       <div className="w-56 h-2 mt-4 dark:bg-gray-700"> 
                    <div className=" mt-5 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-700  dark:bg-gray-700">Monastir , Tunisia </div> </div>
                    <p className="w- h-2 mt-2 text-gray-400  dark:bg-gray-700"> plus de 30 restaurants</p>
                </div>





    
                <div className="w-full ">
                <Link href="/pageClient" > 
                  <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"
                  onClick={() => handleImageClick("Sfax")}>
                    <Image 
                      src="/sfax.jpg"
                      alt="Sfax" 
                      class="h-full w-auto"
                      width={600}
                      height={300} /> 
                      </div>
                       </Link>
                    
                   <div className="w-56 h-2 mt-4 dark:bg-gray-700"> 
                    <div className=" mt-5 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-700  dark:bg-gray-700">Sfax , Tunisia </div> </div>
                    <p className="w- h-2 mt-2 text-gray-400  dark:bg-gray-700"> plus de 30 restaurants</p>
                </div>


                <div className="w-full ">
                <Link href="/pageClient" > 
                  <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"
                  onClick={() => handleImageClick("Ariana")}>
                    <Image 
                      src="/sfax.jpg"
                      alt="Ariana" 
                      class="h-full w-auto"
                      width={600}
                      height={300} /> 
                      </div>
                       </Link>
                    
                   <div className="w-56 h-2 mt-4 dark:bg-gray-700"> 
                    <div className=" mt-5 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-700  dark:bg-gray-700">Ariana , Tunisia </div> </div>
                    <p className="w- h-2 mt-2 text-gray-400  dark:bg-gray-700"> plus de 30 restaurants</p>
                </div>


                <div className="w-full ">
                <Link href="/pageClient" > 
                  <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"
                  onClick={() => handleImageClick("Beja")}>
                    <Image 
                      src="/sfax.jpg"
                      alt="Beja" 
                      class="h-full w-auto"
                      width={600}
                      height={300} /> 
                      </div>
                       </Link>
                    
                   <div className="w-56 h-2 mt-4 dark:bg-gray-700"> 
                    <div className=" mt-5 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-700  dark:bg-gray-700">Beja , Tunisia </div> </div>
                    <p className="w- h-2 mt-2 text-gray-400  dark:bg-gray-700"> plus de 30 restaurants</p>
                </div>


                <div className="w-full ">
                <Link href="/pageClient" > 
                  <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"
                  onClick={() => handleImageClick("Ben Arous")}>
                    <Image 
                      src="/sfax.jpg"
                      alt="Ben Arous" 
                      class="h-full w-auto"
                      width={600}
                      height={300} /> 
                      </div>
                       </Link>
                    
                   <div className="w-56 h-2 mt-4 dark:bg-gray-700"> 
                    <div className=" mt-5 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-700  dark:bg-gray-700">Ben Arous, Tunisia </div> </div>
                    <p className="w- h-2 mt-2 text-gray-400  dark:bg-gray-700"> plus de 30 restaurants</p>
                </div>

    
               

            </div>
        </div>
    </section>





    )
} 
export default Card; 