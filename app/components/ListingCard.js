
"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useCallback, useMemo } from "react"


import useCountries from "../hooks/usecountries"





const ListingCard = ({
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
  
    const price = useMemo(() => {
      if (reservation) {
        return reservation.totalPrice
      }
  
      return data.price
    }, [reservation, data.price])


  
    const reservationDate = useMemo(() => {
      if (!reservation) {
        return null
      }
  
      const start = new Date(reservation.startDate)
      const end = new Date(reservation.endDate)
  
      return `${format(start, "PP")} - ${format(end, "PP")}`
    }, [reservation]) 
  
    return (
      <div
        onClick={() => router.push(`/ajout/${data.id}`)}
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
        <div className="font-light text-neutral-500">
          le titre : { data.title}
        </div>

          </div>
        </div>
      </div>
    )
  }
  
  export default ListingCard