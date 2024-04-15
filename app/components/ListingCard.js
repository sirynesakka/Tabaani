
"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useCallback, useMemo } from "react"
import { LuClipboardEdit } from "react-icons/lu";
import Deletebtn from "./deletebtn"



import useCountries from "../hooks/usecountries"
import Link from "next/link";





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




  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null
    }

    const start = new Date(reservation.startDate)
    const end = new Date(reservation.endDate)

    return `${format(start, "PP")} - ${format(end, "PP")}`
  }, [reservation])

  return (
    <>


 <div className=" flex flex-col gap-2 w-full">
        <div
          className="
              aspect-square
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
              relative
              grid grid-cols-1 gap-4
              
            "
        >
     
          <Image fill
            alt="listing"
            src={data.imageSrc}
            className="p-4 object-cover h-64 w-64  " />

          <div className="absolute bottom-1 left-0 right-0 p-4">
            <div className="font-semibold text-lg">
              {location?.region}, {location?.label}
            </div>

            <div className="font-light text-neutral-500">
              {data.category}
            </div>

            <div className="font-light text-neutral-500">
              {data.category2}
            </div>
            <div className="font-light text-neutral-500">
              {data.category3}
            </div>
            <div className="font-light text-neutral-500">
              {data.category4}
            </div>
            <div className="font-light text-neutral-500">
              {data.category5}
            </div>
            <div className="font-semibold text-neutral-500">
              le titre : {data.title}
            </div>
            <div className="font-semibold text-neutral-500">
              Description: {data.description}
            </div>
            <div>
            <Link href={`/editform/${data._id}`}
              className="bg-white hover:bg-teal-600 text-black  font-bold py-1 px-3 rounded-md  shadow-md"> Modifier
            </Link>
          </div>

          <Deletebtn id={data._id} />

          </div>
         


        </div>
      </div>




    </>

  )
}

export default ListingCard