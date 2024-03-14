"use client"
import React from "react";
import Container from "../components/container"
import { usePathname, useSearchParams } from 'next/navigation';
import { IoIosCafe , IoIosRestaurant  } from "react-icons/io";


import Categorybox from "../components/categorybox"




export const categories5 = [
    {
      label: 'Familles',
      icon: IoIosCafe ,
      description: 'This property is close to the beach!',
    },
    {
      label: 'Romantique',
      icon: IoIosRestaurant ,
      description: 'This property is has windmills!',
    },
    {
        label: 'Enfants',
        icon: IoIosRestaurant ,
        description: 'This property is has windmills!',
      },

    
  ]
  
  


const Category5 = () => {
    const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/components';
  if (!isMainPage) {
    return null;
  }
    return ( 
        <Container>
            <div  className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        ">
            {categories5.map((item) => (
          <Categorybox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}

            </div>


        </Container>

    )
}
export default Category5; 