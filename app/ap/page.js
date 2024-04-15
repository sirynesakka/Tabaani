


import {dynamic} from "next/dynamic"



const Map = dynamic(() => import ("../models/map"),{
  ssr: false 
}
);
export default Map; 