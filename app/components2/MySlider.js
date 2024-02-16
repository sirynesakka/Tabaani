import React from "react"; 
import Cadre from "./cadre"
import Slider from "react-slick"
import NextArrow from "../components2/NextArrow"
import PrevArrow from "../components2/PrevArrow"


const data = [
    { img: "/r1.jpg"},
    { img: "/r2.png"},
    { img: "/r3.jpg"},
    { img: "/r4.jpg"},
    { img: "/r5.jpg"},
    { img: "/r6.jpg"}, 





]

const MySlider = () => {
    const settings = {
     arrows: true,
     infinite: false,
     speed: 500,
     slidesToShow: 4,
     slidesToScroll: 1,
     nextArrow: <NextArrow/>,
     prevArrow: <PrevArrow/>,
     responsive: [


         {  breakpoint: 1280,
            settings:{ slidesToShow: 3,}

         }, 

         {  breakpoint: 1000,
            settings:{ slidesToShow: 2,}

         },

         {  breakpoint: 1280,
            settings:{ slidesToShow: 3,}

         },

         {  breakpoint: 650,
            settings:{ slidesToShow: 1,}

         },
        ],

       
}


    return (
        <div className="z-0"> 
         
         
             <Slider {...settings} className="z-0 ">
                {data.map((el,index) => <Cadre key={index} img={el.img}/>) }
             </Slider>
        </div>

    )
}


export default MySlider ; 