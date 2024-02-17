import React from "react";


const Cadre = ({img}) => {
    return(
        <div className="w-[100%] bg-red-50  shadow-x1">
           <div>
              <img className="h-[250px] w-[100%] object-cover" src={img} alt="dp"/>
              <div className="flex flex-col gap-4 p-[20px]">

                  <div>
                     <h2 className="font-blod ">Dar El Jeld</h2>
                   </div>

                   <div>
                      <p>
                      Dar el Jeld is a gourmet restaurant which offers typical Tunisian cuisine in the traditional old historic home décor. Dar el Jeld is ideally situated in the medina and offers a luxurious atmosphere. If it is a couscous you desire you will be able to choose from many. There are 6 different varieties of food available.
                      </p>
                   </div>
                   <div>
                      <a className="text-white" href="#"> Read more 

                      </a>
                   </div>

              
              
              
              
              
              
              
              
              </div>
           </div>
        </div>

    )
}


export default Cadre; 