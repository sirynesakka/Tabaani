import React from "react";
import Link from "next/link";
import Searchinput from "./Searchinput";

const Main = () => {
return ( 
        
        
    <div>

    
             <div className="h-[100vh] flex justify-center items-center flex-col text-center custom-img">
                 <Searchinput/>
                 <h2 className="text-5xl text-center font-blod"></h2>
                  <p className=" py-5 text-xl"></p>
        
            </div>
           

            <div> 
                 <p className="max-w-[650px] m-auto text-[20px]">
                    Le développement, qu'il soit personnel, professionnel ou social, constitue un processus continu d'évolution et d'amélioration. Il implique souvent l'acquisition de nouvelles compétences, la consolidation de connaissances existantes et l'adaptation aux changements. Sur le plan individuel, le développement personnel peut prendre diverses formes, telles que l'apprentissage de nouvelles langues, l'exploration de nouvelles passions ou la promotion de la santé mentale. Sur le plan professionnel, le développement se traduit par l'acquisition de compétences spécifiques au métier, le perfectionnement des aptitudes en leadership et la recherche de nouvelles opportunités. Enfin, sur le plan social, le développement englobe des efforts collectifs visant à améliorer les conditions de vie, à promouvoir l'équité et à renforcer les liens communautaires. Ainsi, le développement est un voyage dynamique et inépuisable qui contribue à façonner de manière positive la vie individuelle et la société dans son ensemble
                 </p>
            </div> 
          
              
    </div> 
    )

} 
export default Main; 