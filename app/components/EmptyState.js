"use client"
import { useRouter } from "next/navigation"

import Button from "./button"
import Heading from "./heading"

const EmptyState = ({
  title = "Aucun élément à afficher",
  subtitle = "Essayez de modifier ou de supprimer certains de vos filtres",
  
}) => {
  const router = useRouter()

  return (
    <div
      className="
        h-[60vh]
        flex 
        flex-col 
        gap-2 
        justify-center 
        items-center 
      "
    >
      <Heading center title={title} subtitle={subtitle} />
     
    </div>
  )
}

export default EmptyState; 