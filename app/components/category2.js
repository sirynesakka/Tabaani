
"use client"
import React from "react";
import Container from "../components/container"
import { usePathname, useSearchParams } from 'next/navigation';
import { IoIosCafe , IoIosRestaurant  } from "react-icons/io";


import Categorybox from "../components/categorybox"




export const categories2 = [
    {
      label: 'Petit-déjeuner',
      icon: IoIosCafe ,
      description: 'This property is close to the beach!',
    },
    {
      label: 'Brunch',
      icon: IoIosRestaurant ,
      description: 'This property is has windmills!',
    },
    {
        label: 'Déjeuner',
        icon: IoIosRestaurant ,
        description: 'This property is has windmills!',
      },
      {
        label: 'Diner',
        icon: IoIosRestaurant ,
        description: 'This property is has windmills!',
      },
    
  ]
  
  


const Category2 = () => {
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
            {categories.map((item) => (
          <Categorybox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={Category === item.label}
          />
        ))}

            </div>


        </Container>

    )
}
export default Category2; 