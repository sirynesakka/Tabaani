import React from "react"
import Image from "next/image"




const Temoignages = () => { 


    return( 
      <div className="container mx-auto my-24 md:px-6">
      <section className=" py-20  text-center mb-32">
        <h2 className="font-bold text-3xl mb-12">Témoignages</h2>

        <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
          {/* Témoignage 1 */}
          <div className="mb-12 md:mb-0">
            <div className="flex justify-center mb-6">
              <Image
               src="/t1.png"
                className="w-32 rounded-full shadow-lg dark:shadow-black/20" 
                alt="Maria Smantha"
                width={200} 
                height={100} 
                />
            </div>
            <h5 className="font-bold text-lg mb-2">Maria Smantha</h5>
            <h6 className="font-medium text-primary dark:text-primary-400 mb-4">
              Développeuse Web
            </h6>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
              id officiis hic tenetur quae quaerat ad velit ab hic.
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                <path fill="currentColor"
                  d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
              </svg>
            </p>
            <ul className="flex justify-center mb-0">
              {[...Array(5)].map((_, index) => (
                <li key={index}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
              ))}
            </ul>
          </div>
          {/* Témoignage 2 */}
          <div className="mb-12 md:mb-0">
            <div className="flex justify-center mb-6">
              <Image src="/t2.png"
                className="w-32 rounded-full shadow-lg dark:shadow-black/20" alt="Lisa Cudrow" 
                width={200} 
                height={100} 
                />
            </div>
            <h5 className="font-bold text-lg mb-2">Lisa Cudrow</h5>
            <h6 className="font-medium text-primary dark:text-primary-400 mb-4">
              Graphiste
            </h6>
            <p className="mb-4">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid commodi.
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                <path fill="currentColor"
                  d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
              </svg>
            </p>
            <ul className="flex justify-center mb-0">
              {[...Array(5)].map((_, index) => (
                <li key={index}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
              ))}
            </ul>
          </div>
          {/* Témoignage 3 */}
          <div className="mb-0">
            <div className="flex justify-center mb-6">
            <Image src="/t3.png"
                className="w-32 rounded-full shadow-lg dark:shadow-black/20" alt="John Smith"
                width={200} 
                height={100}  />
            </div>
            <h5 className="font-bold text-lg mb-2">John Smith</h5>
            <h6 className="font-medium text-primary dark:text-primary-400 mb-4">
              Spécialiste en marketing
            </h6>
            <p className="mb-4">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti.
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                <path fill="currentColor"
                  d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
              </svg>
            </p>
            <ul className="flex justify-center mb-0">
              {[...Array(5)].map((_, index) => (
                <li key={index}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
    );
};
export default Temoignages;

    


