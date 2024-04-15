
"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useCallback, useMemo } from "react"
import Deletebtn from "./deletebtn"
import Confirmationbtn from "../confirmationbtn/page"
import useCountries from "../hooks/usecountries"






const Adminlisting = ({
    data,
    reservation,
    onAction,
    disabled,
    actionLabel,
    actionId = "",
    currentUser
  }) => {
    const router = useRouter()
    const { getByValue } = useCountries()

  
    const location = getByValue(data.locationValue)
  
    const handleCancel = useCallback(
      e => {
        e.stopPropagation()
  
        if (disabled) {
          return
        }
  
        onAction?.(actionId)
      },
      [disabled, onAction, actionId]
    )
  
   


  
  
  
    return (
      <> 
      <div
        onClick={() => router.push(`ajout/${data.id}`)}
        className="col-span-1 cursor-pointer group"
      >
        <div className=" flex flex-col gap-2 w-full">
          <div
            className="
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
              
            "
          >
         <div className="font-semibold text-lg">
          {location?.region}, {location?.label}
        </div>

        <div className="font-light text-neutral-500">
          { data.category}
        </div>

        <div className="font-light text-neutral-500">
           { data.category2}
        </div>
        <div className="font-light text-neutral-500">
          { data.category3}
        </div>
        <div className="font-light text-neutral-500">
          { data.category4}
        </div>
         <div className="font-light text-neutral-500">
          { data.category5}
        </div>
        <div className="font-semibold text-neutral-500">
          le titre : { data.title}
        </div>
        <div className="font-semibold text-neutral-500">
          Description: { data.description}
        </div> 

<div>
<Deletebtn id={data._id}/>
<Confirmationbtn/>
</div>
      
       
       


          </div>
        </div>
      </div>
      <div> <Confirmationbtn/>
      </div>
     


      
      </>

    )
  }
  
  export default Adminlisting;